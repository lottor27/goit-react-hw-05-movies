import { Link, NavLink } from 'react-router-dom'


const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Films&Movies Info</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">In Trend</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Films&Movies</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
	)
}

export default Header

// {/* <nav classNameName='navbar bg-dark mb-3 navbar-expand-md'>
// 			<div classNameName='container-fluid'>
// 				<span classNameName='navbar-brand mb-0 h1 text-success'>
// 					Navbar
// 				</span>
// 				<div
// 					classNameName='collapse navbar-collapse'
// 					id='navbarNavAltMarkup'
// 				>
// 					<div classNameName='navbar-nav'>
// 						<NavLink
// 							classNameName='nav-link text-white'
// 							aria-current='page'
// 							to='/'
// 						>
// 							Home
// 						</NavLink>
// 						<NavLink classNameName='nav-link text-white' to='/users'>
// 							Users
// 						</NavLink>
// 						<NavLink classNameName='nav-link text-white' to='/products'>
// 							Products
// 						</NavLink>
// 					</div>
// 				</div>
// 				<button
// 					classNameName='btn btn-outline-success'
// 					onClick={handleShowModal}
// 				>
// 					Open Modal
// 				</button>
// 			</div>
// 		</nav> */}