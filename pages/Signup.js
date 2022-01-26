import { useContext } from "react"
import MuesumContext from "../utils/MuesumContext"
import styles from "./Signup.module.css"
function Signup() {
  const { signUp } = useContext(MuesumContext)
  return (
    <>
      <div className={styles.heroA}>
        <div className={styles.formBoxA}>
          <div className={styles.buttonBoxA}>
            <h3 className={styles.toggleBtnA}> مرحباً بك</h3>
          </div>
          <form style={{ left: "50px" }} className={styles.inputGroupA} onSubmit={signUp}>
            <input type="text" name="firstName" placeholder="الاسم الأول" className={styles.inputFieldA} required />
            <input type="text" name="lastName" placeholder="الاسم الأخير" className={styles.inputFieldA} required />
            <input type="email" name="email" placeholder="الأيميل" className={styles.inputFieldA} required />
            <input type="url" name="avatar" placeholder="الصورة الشخصية" className={styles.inputFieldA} required />
            <input type="text" name="phoneNumber" placeholder="رقم الجوال" className={styles.inputFieldA} required />
            <input type="password" name="password" placeholder="كلمة المرور" className={styles.inputFieldA} required />
            <button type="submit" className={styles.submitBtnA}>
              تسجيل دخول
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
