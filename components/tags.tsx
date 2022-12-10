function Tag({ children }) {
  return (
    <span className="px-6 py-1 border rounded-full border-accent-2 bg-accent-1">
      {children}
    </span>
  );
}

export default function TagsComponent({ tags }) {
  return (
    <div className="flex gap-2 text-sm">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
