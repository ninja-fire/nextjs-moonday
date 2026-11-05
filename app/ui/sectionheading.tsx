import clsx from "clsx";

export default function SectionHeading({ eyebrow, title, text, id, center = false }: {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={clsx("flex flex-col gap-5 max-w-2xl", center && "items-center text-center mx-auto")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="text-balance">{title}</h2>
      {text && <p className="text-base font-medium text-caption leading-7 max-w-lg">{text}</p>}
    </div>
  );
}
