export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await new Promise((r) => setTimeout(r, 3000));

  const { id } = await params;

  return <div>Topic Page: {id}</div>;
}
