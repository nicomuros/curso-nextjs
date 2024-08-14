import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  )
}