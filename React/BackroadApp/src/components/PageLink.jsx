import React from 'react'

function PageLink({link}) {
  return (
    
        <a href={link.href} className='nav-link'>
        {link.text}
    </a>
    
  )
}

export default PageLink;
