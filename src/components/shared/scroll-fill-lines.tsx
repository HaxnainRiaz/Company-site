'use client';

import { useEffect, useRef, useState } from 'react';

/** Break text at the rendered width so every visible row shares one scroll fill. */
export function ScrollFillLines({ text }: { text: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState([text]);
  const [measured, setMeasured] = useState(false);

  useEffect(() => {
    const heading = root.current?.parentElement;
    if (!heading) return;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    let cancelled = false;

    const update = () => {
      if (cancelled) return;
      const style = getComputedStyle(heading);
      context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const spacing = Number.parseFloat(style.letterSpacing) || 0;
      const available = heading.clientWidth - 2;
      const widthOf = (value: string) => context.measureText(value).width + spacing * Math.max(0, value.length - 1);
      const next: string[] = [];
      let line = '';
      for (const word of text.split(/\s+/)) {
        const candidate = line ? `${line} ${word}` : word;
        if (line && widthOf(candidate) > available) {
          next.push(line);
          line = word;
        } else {
          line = candidate;
        }
      }
      if (line) next.push(line);
      for (let index = next.length - 1; index > 0; index--) {
        let previousWords = next[index - 1].split(' ');
        while (previousWords.length > 1) {
          const shorterPrevious = previousWords.slice(0, -1).join(' ');
          const longerCurrent = `${previousWords.at(-1)} ${next[index]}`;
          const imbalanceBefore = Math.abs(widthOf(next[index - 1]) - widthOf(next[index]));
          const imbalanceAfter = Math.abs(widthOf(shorterPrevious) - widthOf(longerCurrent));
          if (widthOf(longerCurrent) > available || imbalanceAfter >= imbalanceBefore) break;
          previousWords = previousWords.slice(0, -1);
          next[index - 1] = shorterPrevious;
          next[index] = longerCurrent;
        }
      }
      setLines(previous => previous.join('\n') === next.join('\n') ? previous : next);
      setMeasured(true);
    };

    const observer = new ResizeObserver(update);
    observer.observe(heading);
    document.fonts.ready.then(update);
    update();
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [text]);

  return <span ref={root} className="scroll-fill-lines" data-measured={measured}>
    {lines.map((line, index) => <span className="scroll-fill-line" key={`${index}-${line}`}>{line}{index < lines.length - 1 ? ' ' : ''}</span>)}
  </span>;
}
