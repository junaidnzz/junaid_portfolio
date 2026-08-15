import { Icon } from '../../data/icons';

interface BadgeProps {
  label: string;
  icon?: string;
  accent?: boolean;
}

export default function Badge({ label, icon, accent = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${
        accent
          ? 'border-accent/40 bg-accent/10 text-accent'
          : 'border-white/10 bg-white/[0.04] text-muted'
      }`}
    >
      {icon && <Icon name={icon} className="text-sm" />}
      {label}
    </span>
  );
}
