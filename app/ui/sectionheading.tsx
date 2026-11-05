import clsx from "clsx";

export default function SectionHeading({ eyebrow, title, text, id, center = false }: {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={clsx("flex flex-col gap-4 max-w-(--breakpoint-sm)", center && "items-center text-center mx-auto")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p className="text-sm font-medium text-caption leading-6">{text}</p>}
    </div>
  );
}
