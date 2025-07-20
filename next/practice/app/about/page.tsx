
import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
      <h1 className='text-xl'>About Page</h1>
      <Link href={'/about/info'}>info</Link>
    </div>
  )
}

export default page
