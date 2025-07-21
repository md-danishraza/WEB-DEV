import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className=''>
        <header className='py-2 w-1/2 bg-teal-200 rounded'> <h1>Tours layout</h1></header>
     
      {children}
    </div>
  )
}

export default layout
