import { profile } from '../data/profile';
import { Icon } from '../data/icons';

const socials = [
  { name: 'github', href: profile.github, label: 'GitHub' },
  { name: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
  { name: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite, designed with AI assistance
        </p>
        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="press grid place-items-center w-11 h-11 rounded-lg text-muted hover:text-accent transition-colors text-lg"
            >
              <Icon name={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
