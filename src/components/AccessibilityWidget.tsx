import { useEffect, useRef, useState, useCallback } from 'react';
import { AccessibilityPersonIcon } from './AccessibilityPersonIcon';
import {
  Type,
  Contrast,
  Link2,
  PauseCircle,
  RotateCcw,
  X,
  AlignLeft,
  AlignCenter,
  AlignJustify,
  Droplets,
  ImageOff,
  VideoOff,
  ScanEye,
  Focus,
  LayoutGrid,
  CaseSensitive,
} from 'lucide-react';

type Level = 0 | 1 | 2 | 3;
type TextAlignMode = 'default' | 'left' | 'center' | 'justify';

type A11ySettings = {
  biggerTextLevel: Level;
  lineHeightLevel: Level;
  textAlign: TextAlignMode;
  readableFont: boolean;
  contrastLevel: Level;
  grayscale: boolean;
  hideImages: boolean;
  pauseMotion: boolean;
  highlightLinks: boolean;
  readingMask: boolean;
  outlineFocus: boolean;
  showPageStructure: boolean;
};

const STORAGE_KEY = 'duda-a11y-settings-v2';

const defaultSettings: A11ySettings = {
  biggerTextLevel: 0,
  lineHeightLevel: 0,
  textAlign: 'default',
  readableFont: false,
  contrastLevel: 0,
  grayscale: false,
  hideImages: false,
  pauseMotion: false,
  highlightLinks: false,
  readingMask: false,
  outlineFocus: false,
  showPageStructure: false,
};

const FONT_SCALES: Record<Level, number> = { 0: 1, 1: 1.1, 2: 1.2, 3: 1.3 };
const LINE_HEIGHTS: Record<Level, string> = { 0: '', 1: '1.75', 2: '2', 3: '2.25' };
const CONTRAST_FILTERS: Record<Level, string> = {
  0: '',
  1: 'contrast(1.2)',
  2: 'contrast(1.4)',
  3: 'contrast(1.6) brightness(1.05)',
};

function loadSettings(): A11ySettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...defaultSettings, ...JSON.parse(stored) };
  } catch {
    /* ignore */
  }
  return defaultSettings;
}

function applySettings(settings: A11ySettings) {
  const root = document.documentElement;
  const body = document.body;

  root.style.fontSize = `${FONT_SCALES[settings.biggerTextLevel] * 100}%`;
  body.style.lineHeight = LINE_HEIGHTS[settings.lineHeightLevel] || '';

  root.classList.toggle('a11y-text-left', settings.textAlign === 'left');
  root.classList.toggle('a11y-text-center', settings.textAlign === 'center');
  root.classList.toggle('a11y-text-justify', settings.textAlign === 'justify');

  root.classList.toggle('a11y-readable-font', settings.readableFont);
  root.classList.toggle('a11y-grayscale', settings.grayscale);
  root.classList.toggle('a11y-hide-images', settings.hideImages);
  root.classList.toggle('a11y-pause-motion', settings.pauseMotion);
  root.classList.toggle('a11y-highlight-links', settings.highlightLinks);
  root.classList.toggle('a11y-reading-mask', settings.readingMask);
  root.classList.toggle('a11y-outline-focus', settings.outlineFocus);

  const filters = [CONTRAST_FILTERS[settings.contrastLevel], settings.grayscale ? 'grayscale(100%)' : '']
    .filter(Boolean)
    .join(' ');
  root.style.filter = filters || '';
}

type PageItem = { id: string; label: string; tag: string };

function getPageStructure(): PageItem[] {
  const items: PageItem[] = [];
  const selectors = [
    { sel: 'nav', label: 'Navigation' },
    { sel: 'main', label: 'Main content' },
    { sel: 'footer', label: 'Footer' },
  ];

  selectors.forEach(({ sel, label }) => {
    const el = document.querySelector(sel);
    if (el) {
      const id = el.id || sel;
      if (!el.id) el.id = `a11y-landmark-${sel}`;
      items.push({ id: el.id, label, tag: sel.toUpperCase() });
    }
  });

  document.querySelectorAll('h1, h2, h3').forEach((heading, index) => {
    const el = heading as HTMLElement;
    if (!el.id) el.id = `a11y-heading-${index}`;
    items.push({
      id: el.id,
      label: el.textContent?.trim().slice(0, 60) || `Heading ${index + 1}`,
      tag: el.tagName,
    });
  });

  return items;
}

function ReadingMaskOverlay() {
  const [bandTop, setBandTop] = useState(
    () => window.innerHeight / 2 - 60
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setBandTop(Math.max(40, Math.min(window.innerHeight - 160, e.clientY - 60)));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const bandHeight = 120;

  return (
    <div className="a11y-reading-mask-overlay" aria-hidden="true">
      <div className="a11y-reading-mask-top" style={{ height: bandTop }} />
      <div
        className="a11y-reading-mask-band"
        style={{ top: bandTop, height: bandHeight }}
      />
      <div
        className="a11y-reading-mask-bottom"
        style={{ top: bandTop + bandHeight }}
      />
    </div>
  );
}

interface GridOptionProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
  ariaLabel: string;
  levelBars?: Level;
}

function GridOption({ label, icon, active, onClick, ariaLabel, levelBars }: GridOptionProps) {
  return (
    <button
      type="button"
      className={`a11y-grid-option ${active ? 'is-active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel}
    >
      <span className="a11y-grid-icon">{icon}</span>
      <span className="a11y-grid-label">{label}</span>
      {levelBars !== undefined && levelBars > 0 && (
        <span className="a11y-level-bars" aria-hidden="true">
          {[1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={`a11y-level-bar ${bar <= levelBars ? 'is-filled' : ''}`}
            />
          ))}
        </span>
      )}
    </button>
  );
}

function nextLevel(current: Level): Level {
  return ((current + 1) % 4) as Level;
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const initial = loadSettings();
    setSettings(initial);
    applySettings(initial);
  }, []);

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (settings.showPageStructure) {
      setPageItems(getPageStructure());
    }
  }, [settings.showPageStructure, open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (settings.showPageStructure) {
          setSettings((s) => ({ ...s, showPageStructure: false }));
        } else {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, settings.showPageStructure]);

  const update = useCallback((patch: Partial<A11ySettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  }, []);

  const reset = () => {
    setSettings(defaultSettings);
    document.body.style.lineHeight = '';
    document.documentElement.style.filter = '';
  };

  const cycleTextAlign = () => {
    const order: TextAlignMode[] = ['default', 'left', 'center', 'justify'];
    const idx = order.indexOf(settings.textAlign);
    update({ textAlign: order[(idx + 1) % order.length] });
  };

  const scrollToItem = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const el = document.getElementById(id);
    el?.focus({ preventScroll: true });
  };

  return (
    <>
      {settings.readingMask && <ReadingMaskOverlay />}

      <div className="a11y-widget">
        {open && (
          <div
            ref={panelRef}
            id="a11y-widget-panel"
            className="a11y-widget-panel"
            role="dialog"
            aria-label="Accessibility options"
          >
            <div className="a11y-widget-header">
              <div className="flex items-center gap-2">
                <AccessibilityPersonIcon />
                <h2 className="a11y-widget-title">Accessibility Menu</h2>
              </div>
              <button
                type="button"
                className="a11y-widget-close"
                onClick={() => setOpen(false)}
                aria-label="Close accessibility menu"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="a11y-widget-body">
              {settings.showPageStructure ? (
                <div className="a11y-page-structure">
                  <button
                    type="button"
                    className="a11y-structure-back"
                    onClick={() => update({ showPageStructure: false })}
                  >
                    ← Back to menu
                  </button>
                  <h3 className="a11y-section-title">Page structure</h3>
                  <ul className="a11y-structure-list">
                    {pageItems.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className="a11y-structure-item"
                          onClick={() => scrollToItem(item.id)}
                        >
                          <span className="a11y-structure-tag">{item.tag}</span>
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <h3 className="a11y-section-title">Text</h3>
                  <div className="a11y-grid">
                    <GridOption
                      label="Bigger text"
                      icon={<Type size={22} aria-hidden="true" />}
                      active={settings.biggerTextLevel > 0}
                      levelBars={settings.biggerTextLevel}
                      onClick={() =>
                        update({ biggerTextLevel: nextLevel(settings.biggerTextLevel) })
                      }
                      ariaLabel={`Bigger text, level ${settings.biggerTextLevel} of 3`}
                    />
                    <GridOption
                      label="Line height"
                      icon={<AlignLeft size={22} aria-hidden="true" />}
                      active={settings.lineHeightLevel > 0}
                      levelBars={settings.lineHeightLevel}
                      onClick={() =>
                        update({ lineHeightLevel: nextLevel(settings.lineHeightLevel) })
                      }
                      ariaLabel={`Line height, level ${settings.lineHeightLevel} of 3`}
                    />
                    <GridOption
                      label="Text align"
                      icon={
                        settings.textAlign === 'center' ? (
                          <AlignCenter size={22} aria-hidden="true" />
                        ) : settings.textAlign === 'justify' ? (
                          <AlignJustify size={22} aria-hidden="true" />
                        ) : (
                          <AlignLeft size={22} aria-hidden="true" />
                        )
                      }
                      active={settings.textAlign !== 'default'}
                      onClick={cycleTextAlign}
                      ariaLabel={`Text align: ${settings.textAlign}`}
                    />
                    <GridOption
                      label="Readable font"
                      icon={<CaseSensitive size={22} aria-hidden="true" />}
                      active={settings.readableFont}
                      onClick={() => update({ readableFont: !settings.readableFont })}
                      ariaLabel="Readable font"
                    />
                  </div>

                  <h3 className="a11y-section-title">Visual</h3>
                  <div className="a11y-grid">
                    <GridOption
                      label="Contrast"
                      icon={<Contrast size={22} aria-hidden="true" />}
                      active={settings.contrastLevel > 0}
                      levelBars={settings.contrastLevel}
                      onClick={() =>
                        update({ contrastLevel: nextLevel(settings.contrastLevel) })
                      }
                      ariaLabel={`Contrast, level ${settings.contrastLevel} of 3`}
                    />
                    <GridOption
                      label="Grayscale"
                      icon={<Droplets size={22} aria-hidden="true" />}
                      active={settings.grayscale}
                      onClick={() => update({ grayscale: !settings.grayscale })}
                      ariaLabel="Grayscale"
                    />
                    <GridOption
                      label="Hide images"
                      icon={<ImageOff size={22} aria-hidden="true" />}
                      active={settings.hideImages}
                      onClick={() => update({ hideImages: !settings.hideImages })}
                      ariaLabel="Hide images"
                    />
                    <GridOption
                      label="Pause animations"
                      icon={<VideoOff size={22} aria-hidden="true" />}
                      active={settings.pauseMotion}
                      onClick={() => update({ pauseMotion: !settings.pauseMotion })}
                      ariaLabel="Pause animations"
                    />
                  </div>

                  <h3 className="a11y-section-title">Orientation</h3>
                  <div className="a11y-grid">
                    <GridOption
                      label="Highlight links"
                      icon={<Link2 size={22} aria-hidden="true" />}
                      active={settings.highlightLinks}
                      onClick={() => update({ highlightLinks: !settings.highlightLinks })}
                      ariaLabel="Highlight links"
                    />
                    <GridOption
                      label="Reading mask"
                      icon={<ScanEye size={22} aria-hidden="true" />}
                      active={settings.readingMask}
                      onClick={() => update({ readingMask: !settings.readingMask })}
                      ariaLabel="Reading mask"
                    />
                    <GridOption
                      label="Outline focus"
                      icon={<Focus size={22} aria-hidden="true" />}
                      active={settings.outlineFocus}
                      onClick={() => update({ outlineFocus: !settings.outlineFocus })}
                      ariaLabel="Outline focus"
                    />
                    <GridOption
                      label="Page structure"
                      icon={<LayoutGrid size={22} aria-hidden="true" />}
                      active={settings.showPageStructure}
                      onClick={() => update({ showPageStructure: true })}
                      ariaLabel="Page structure"
                    />
                  </div>

                  <button type="button" className="a11y-widget-reset" onClick={reset}>
                    <RotateCcw size={16} aria-hidden="true" />
                    Reset all settings
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        <button
          ref={toggleRef}
          type="button"
          className="a11y-widget-trigger"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="a11y-widget-panel"
          aria-label={open ? 'Close accessibility menu' : 'Open accessibility menu'}
        >
          <AccessibilityPersonIcon />
        </button>
      </div>
    </>
  );
}
