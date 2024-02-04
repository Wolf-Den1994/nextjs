import { cookies } from "next/headers"

export default async function DashboardPage() {
  console.log('cookies', cookies().getAll())

  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())

  return <div>{data.title}</div>
}