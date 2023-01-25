import Link from 'next/link'

export default function page() {
  return (
    <>
  <h2>NAV File</h2>
    <Link href='/abc' style={{color:'blue', textDecoration:'underline'}}>Server Side Link</Link>
    <br></br>
    <Link href='/posts' style={{color:'blue', textDecoration:'underline'}}>Client Side Link</Link>
    <br></br>
    <Link href={{
  pathname: '/posts/[date]/[slug]',
  query: {
  date: '2020-01-01',
  slug: 'happy-new-year',
  foo: 'bar',
  bar: 'baz'
  }
}}>Complex URL</Link>
    </>
  )
}