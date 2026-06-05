export function scrollToSection(id: string, onComplete?: () => void) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth' });
  element.focus({ preventScroll: true });
  onComplete?.();
}
