import React from 'react'
const url = 'https://www.course-api.com/react-tours-project';
import Link from 'next/link';
import Image from 'next/image';
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
async function Tours() {
    const response = await fetch(url)
    const tours:Tour[] = await response.json();
    // console.log(tours)
  return (
    <div className='grid md:grid-cols-2 gap-8'>
    {tours.map((tour) => {
      return (
        <Link
          key={tour.id}
          href={`/tours/${tour.id}`}
          className='hover:text-blue-500'
        >
          <div className='relative h-48 mb-2'>
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              sizes='33vw'
              // sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
              priority
              className='object-cover rounded'
            />
          </div>
          <h2>{tour.name}</h2>
        </Link>
      );
    })}
  </div>
  )
}

export default Tours
