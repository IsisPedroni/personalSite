import { Pause, Play } from 'lucide-react';

interface CarouselPauseButtonProps {
  paused: boolean;
  onToggle: () => void;
  label: string;
  variant?: 'light' | 'dark';
}

export function CarouselPauseButton({
  paused,
  onToggle,
  label,
  variant = 'light',
}: CarouselPauseButtonProps) {
  const styles =
    variant === 'dark'
      ? 'text-white border-white/80 hover:bg-white/15'
      : 'text-gray-900 border-gray-500 hover:bg-gray-100';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={paused}
      aria-label={paused ? `Resume ${label}` : `Pause ${label}`}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full transition-colors ${styles}`}
    >
      {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      {paused ? 'Resume' : 'Pause'}
    </button>
  );
}
