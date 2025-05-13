export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log("params", params);
  
  const { id } = await params;
  return <div>book 페이지 [id] 입니다 : {id};</div>;
}
