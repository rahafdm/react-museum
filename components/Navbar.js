import { useContext } from "react"
import MuesumContext from "../utils/MuesumContext"
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap"
import logo from "../assets/img4.png"


function NavbarItem() {
  const { logout } = useContext(MuesumContext)
  return (
    <>
      <Navbar className={styles.navbar}>
        <Container>
          <img
            src={logo}
            style={{
              width: "100px",
              marginBottom: "7%",
              height: "100px",
              marginleft: "10px",
              top: "10px",
              // className: "d-inline-block align-top",
              alt: "EMS",
            }}
          />

          <Link style={{ textDecoration: "none" }} to="/" className={styles.navList + " nav-link"}>
            الصفحة الرئيسية
          </Link>
          <Link to="/collections" className={styles.navList + " nav-link"}>
            القطع الأثرية
          </Link>
          <Link to="/userCollections" className={styles.navList + " nav-link"}>
            مجموعة المستخدمين
          </Link>

          {localStorage.tokenMesuem ? (
            <>
              <Navbar.Toggle />
              <Navbar.Collapse className="d-flex justify-content-end">
                <Link style={{ marginBottom:"7%" }} to="/" className={styles.navList + " nav-link"} onClick={logout}>
                  تسجيل خروج
                </Link>
                <Link style={{ marginBottom:"7%" }} to="/profile" className={styles.navList + " nav-link"}>
                  ملفك الشخصي
                </Link>
                <Link style={{ marginBottom:"7%" }} to="/addCollection" className={styles.navList + " nav-link"}>
                  اضافة مجموعة جديدة 
                </Link>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Navbar.Collapse className="justify-content-end">
                <Link style={{ marginBottom:"7%" }} to="/login" className={styles.navList + " nav-link"}>
                  تسجيل دخول
                </Link>
                <Link style={{ marginBottom:"7%" }} to="/signup" className={styles.navList + " nav-link"}>
                  تسجيل
                </Link>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
