import Link from 'next/link';
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div >
      <Layout page={"Home"} >
        <h1 className='heading'>Home</h1>
        <Link href="/about-us">Go to About us</Link>
      </Layout>
    </div>
  )
}
