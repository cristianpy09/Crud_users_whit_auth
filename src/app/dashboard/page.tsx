import Cards from "@/components/dashboard/cards";

import Nodal from "@/components/dashboard/Nodal";

interface user {
  fullname: string;
  birthdate: string;
}


export default async function DashboardPage() {
  const res = await fetch("http://localhost:3000/api/users");
  const data: user[] = await res.json();

  return (
    <div className="">
      <div>
        <h1 className="p-5 text-center text-5xl bg-gray-900 rounded-3xl mb-4 ">
          Harry Potter
        </h1>
      </div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {data.map((u: user, i: number) => (
          <Cards key={i} name={u.fullname} house={u.birthdate} />
        ))}
      </div>
      <Nodal />
    </div>
  );
}
