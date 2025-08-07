import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useEffect, useState } from "react"


const Navbar = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {   
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])
  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.error("Logout failed:", error.message)
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="fw-bold navbar-brand">Snazzy<span className="text-primary">Shop</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link" href="#">Contact Us</Link>
              </li>
            </ul>
            {user ? (
              <>
                <span className="navbar-text me-2">Welcome, {user.email}</span>
                <button onClick={handleLogout} className="btn btn-outline-danger ms-2">Logout</button>
              </>
            ) : (
              <>
                <Link to={'/login'} className="btn btn-outline-primary ms-2">Login</Link>
                <Link to={'/register'} className="btn btn-outline-secondary ms-2">Register</Link>
              </>
            )}
            <Link to={'/cart'} className="btn btn-outline-primary ms-2">Cart</Link>
            <Link to={'/wishlist'} className="btn btn-outline-dark ms-2">♡</Link>
          </div>
        </div>
      </nav>
    </>
  )

}

export default Navbar