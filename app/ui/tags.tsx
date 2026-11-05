export default function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex gap-2 w-full flex-wrap">
      {tags.map((tag) => (
        <li key={tag} className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px] text-sm font-medium text-label">
          {tag}
        </li>
      ))}
    </ul>
  );
}
