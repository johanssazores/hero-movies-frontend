export default function Grid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="grid grid-cols-12">{children}</div>;
}
