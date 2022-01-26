import { useContext } from "react"
import MuesumContext from "../utils/MuesumContext"
import styles from "./Login.module.css"
function Login() {
  const { login } = useContext(MuesumContext)
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.formBox} >
          <div className={styles.buttonBox}>
            <h3 className={styles.toggleBtn}> مرحباً بك</h3>
          </div>
          <form style={{ left: "50px" }} className={styles.inputGroup} onSubmit={login}>
            <input type="text" name="email" placeholder="الأيميل" className={styles.inputField} required />
            <input type="password" name="password" placeholder="كلمة المرور" className={styles.inputField} required />
            <input type="checkbox" className={styles.checkBox} /> <span> نسيت كلمة المرور ؟</span>
            <button type="submit" className={styles.submitBtn}>
              تسجيل دخول
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
