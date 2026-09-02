import type { ReactNode } from 'react';

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-9">
      <h2 className="font-display text-[19px] font-semibold text-ink mb-3">{title}</h2>
      <div className="text-[14.5px] text-ink-soft leading-[1.85] flex flex-col gap-3">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
