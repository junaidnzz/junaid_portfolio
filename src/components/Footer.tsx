import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-micro text-graphite">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-micro text-graphite">Built with React, Vite and Tailwind</p>
      </div>
    </footer>
  );
}
