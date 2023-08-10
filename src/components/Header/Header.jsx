import { NavLink } from "react-router-dom"


const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <span className='navbar-brand mb-0 h1 text-success'>
			Navbar</span>
    <a className="navbar-brand" href="/">Films&Movies Info</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
      <ul className="">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="index">Home</a>
        </li> */}
        <NavLink to='/' className="nav-link active">Home</NavLink>
        <NavLink to='/movies' className="nav-link active">Films&Movies</NavLink>
        </ul>
    </div>
  </div>
</nav>
	)
}

export default Header

 