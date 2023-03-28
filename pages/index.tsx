import { UsersDetail } from "@/components/UsersDetail";
import { Users } from "@/components/types";

export default function Home({ data }: { data: Users }) {
  return (
    <>
      <UsersDetail data={data} />
    </>
  );
}
export async function getServerSideProps() {
  const request = await fetch("https://fakestoreapi.com/users");
  const data = await request.json();
  return {
    props: { data },
  };
}
