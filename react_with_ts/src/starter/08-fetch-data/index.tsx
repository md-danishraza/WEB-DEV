import { useState, useEffect } from 'react';
import { ms } from 'zod/v4/locales';
const url = 'https://www.course-api.com/react-tours-project';

import { Tour,tourSchema,fetchTours } from './types';

function Component() {
  const [loading,setLoading] = useState<boolean>(true)
  const [error,setError] = useState<string | null>(null);

  const [tours,setTours] = useState<Tour[]>([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true);
      try {
        const data = await fetchTours()
        setTours(data);
      } catch (error) {
        const msg = error instanceof Error ? error.message : "there is an error!!"
        setError(msg);
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  },[])

  if(loading){
   return <h1>loading ...</h1>;
  }
  if(error){
    return <h1>{error}</h1>
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
      {
       tours.map(tour=>{
        return <div key={tour.id}>
          <h1>{tour.name}</h1>
          <h2>{tour.info}</h2>
          <h3>{tour.price}</h3>
        </div>
       })
      }
    </div>
  );
}
export default Component;
