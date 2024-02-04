import { cookies } from "next/headers"

const getData = async () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1', {
    // cache: 'no-store', // SSR
    // cache: 'force-cache', // SSG
    next: { revalidate: 10 }, // ISR
  })
    .then(response => response.json())
}

export default async function DashboardPage() {
  console.log('cookies', cookies().getAll())

  const data = await getData() 

  return <div>{data.title}</div>
}