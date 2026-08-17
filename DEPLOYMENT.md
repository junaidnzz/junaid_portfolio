# Deployment

The site is a static build. GitHub Actions builds it and uploads the result to
Hostinger over FTPS; nothing is built on the server.

```
push to master  ->  npm ci  ->  npm run build (tsc + vite)  ->  FTPS upload of dist/  ->  live
```

Pull requests run the same build without deploying, so a type error or a broken
build is caught before it can reach the server.

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## One-time setup

### 1. Create an FTP account in hPanel

hPanel → **Websites** → your domain → **Files** → **FTP Accounts**.

Use the existing account or create one scoped to the site's directory. Note
down four things:

| Value | Where it comes from |
| --- | --- |
| **FTP host** | shown as `ftp.yourdomain.com` or an IP |
| **FTP username** | usually `u123456789.yourdomain.com` |
| **FTP password** | set it here; it is not shown again |
| **Directory** | `/public_html/` for the primary domain, `/domains/yourdomain.com/public_html/` for an addon domain |

The directory is listed on the same page as the account's home path. Whatever
you use, keep the **trailing slash**.

### 2. Add them as GitHub secrets

GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **New
repository secret**. Four secrets, named exactly:

| Secret | Example |
| --- | --- |
| `FTP_SERVER` | `ftp.junaidnazir.com` |
| `FTP_USERNAME` | `u123456789.junaidnazir.com` |
| `FTP_PASSWORD` | the password from step 1 |
| `FTP_REMOTE_DIR` | `/public_html/` |

### 3. Commit the untracking of generated files

`dist/` and `.idea/` were committed to this repo. Now that CI builds the site,
tracking `dist/` means every local build shows as a diff and every merge
conflicts on generated files; `.idea/` is WebStorm's own state and is personal
to one machine.

Both are already removed from the index and listed in `.gitignore` — the
removal just needs committing:

```sh
git commit -m "Stop tracking build output and IDE settings"
```

The files stay on disk and on the server. This only stops git watching them.

### 4. Turn on Force HTTPS

hPanel → **Websites** → your domain → **Security** → **Force HTTPS**. It is done
there rather than in `.htaccess`, because a hand-written HTTPS redirect behind
Hostinger's proxy is the usual cause of a redirect loop.

## Deploying

Merge to `master`. That is the whole procedure.

```sh
git checkout master
git merge revamp-v3      # the current redesign lives here
git push
```

Watch it on the repo's **Actions** tab. To redeploy without a code change, use
**Actions → Deploy → Run workflow**.

## What lands on the server

Only the contents of `dist/`, copied into the remote directory. The action keeps
a manifest (`.ftp-deploy-sync-state.json`) at the destination and uploads just
what changed, so a copy edit is a few files rather than the whole build.

It never wipes the remote directory (`dangerous-clean-slate: false`) — mail
folders, `.well-known/` and anything uploaded by hand sit in the same tree.

`public/.htaccess` ships with the build and handles compression, cache headers
(a year on the fingerprinted files under `/assets/`, no-cache on `index.html`)
and the single-page fallback.

## If it fails

| Symptom | Cause |
| --- | --- |
| `530 Login incorrect` | wrong `FTP_USERNAME`; Hostinger's is the long `u123456789.domain` form, not your hPanel email |
| Deploy succeeds, site unchanged | `FTP_REMOTE_DIR` points somewhere other than the served directory — check the domain's document root in hPanel |
| `ECONNREFUSED` / timeout | the host is wrong, or the account is restricted to specific IPs; GitHub runners have no fixed IP |
| Old page still served | a cached `index.html`; hard-reload, and confirm `.htaccess` reached the server |
| Site is a blank page | assets 404 — the build was uploaded to a subdirectory rather than the document root |

## Alternative: deploy over SSH

Business plans and above include SSH, which makes the upload an `rsync` and is
faster and atomic-ish. Swap the upload step for:

```yaml
- name: Upload to Hostinger
  if: github.event_name != 'pull_request'
  uses: burnett01/rsync-deployments@7.0.1
  with:
    switches: -avzr --delete --exclude='.well-known'
    path: dist/
    remote_path: /home/u123456789/public_html/
    remote_host: ${{ secrets.SSH_HOST }}
    remote_port: 65002          # Hostinger's SSH port, not 22
    remote_user: ${{ secrets.SSH_USER }}
    remote_key: ${{ secrets.SSH_KEY }}
```

Generate a key pair, paste the public key into hPanel → **Advanced** → **SSH
Access**, and store the private key as the `SSH_KEY` secret. Note that `--delete`
does empty the target directory of anything not in the build.
