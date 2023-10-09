import { useState } from 'react';

export interface IAccordion {
  title: string;
  children: React.ReactNode;
}

function Accordion(props: IAccordion) {
  const { title, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl px-2.5 py-5 bg-slate-200">
      <div onClick={() => setOpen(!open)}>{title}</div>
      {open && (
        <div className="rounded-xl px-3.5 py-5 bg-white">{children}</div>
      )}
    </div>
  );
}

export default Accordion;
