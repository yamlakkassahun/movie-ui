import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
                <img className="img-fluid" src="/logo192.png" alt="etnet" style={{height: '50px'}}/>
            </Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/home'}>Home <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/movie'}>Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/counter'}>Tv Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/counter'}>Genres</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/counter'}>Account</Link>
                    </li>
                </ul>
            </div>
      </div>
    </nav>
    
  )
}

export default Navbar