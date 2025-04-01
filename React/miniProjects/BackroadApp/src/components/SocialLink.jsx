import React from 'react'

function SocialLink({link}) {
  return (
    <a href={link.href} className="nav-icon">
        <i className={link.icon}></i>
    </a>
  )
}

export default SocialLink
