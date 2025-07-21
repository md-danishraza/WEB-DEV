import React from 'react'
import img from "@/images/Example 2 - PiXimperfect.jpg";
import Image from 'next/image';
function page({params}:{params:{id:string}}) {

  return (
    <div>
      <h1>Dynamic route</h1>
      <h2>{params.id}</h2>
      <div className='flex gap-4 mt-4'>
            {/* local image */}
            <div>
                <Image src={img} alt='local img' className='size-48 object-cover rounded' />
            </div>
            {/* remote image */}
            <div>
                <Image src='https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg' alt='remote img' width={192} height={192} className='size-48' />
            </div>
      </div>
    </div>
  )
}

export default page
