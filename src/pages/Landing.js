import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="intro">
    <h1 className="heading">Cats For Life</h1>
      <h3 className="sub-heading">Come and find your new furry friend!</h3>
      <p className="browse">Browse our fluffy friends looking for a forever home:</p>
            <Link to="/Home" className="sale-btn">Cats For Sale</Link>
    </div>
  )
}

export default Landing
