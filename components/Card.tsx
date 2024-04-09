export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 shadow-lg rounded-lg p-4 border flex flex-col justify-between">
      {children}
    </div>
  );
}
