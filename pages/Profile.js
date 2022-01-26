import { useContext } from "react"
import AddToFavCollection from "../components/AddToFavCollection"
import EditProfile from "../components/EditProfile"
import styles from "../pages/Profile.module.css"
import MuesumContext from "../utils/MuesumContext"

function Profile() {
  const { profile, handleOpenProfile } = useContext(MuesumContext)
  console.log(profile.favCollection);
  if(!profile){
    <h1>lodaing...</h1>
  }
  return (
    <>
      <div className={styles.hero1}> </div>
      <div className={styles.formBox1}>
        <div className={styles.buttonBox1}></div>
        <img className={styles.profileImg} src={profile.avatar} alt="avatar" />
        <form style={{ left: "50px" }} className={styles.inputGroup1}>
          <h5 type="text" className={styles.inputField1} required>
            {" "}
            {profile.firstName}
          </h5>
          <h5 type="text" className={styles.inputField1} required>
            {" "}
            {profile.lastName}
          </h5>
          <h5 type="text" className={styles.inputField1} required>
            {" "}
            {profile.email}
          </h5>
          <h5 type="text" className={styles.inputField1} required>
            {" "}
            {profile.phoneNumber}
          </h5>
        </form>
        <button className={styles.submitBtn1} onClick={handleOpenProfile}>
          تعديل
        </button>
      </div>

      <section>
        <h1> مجموعتي : </h1>
      </section>

      <section>
        <h1> مجموعة المتحف : </h1>
        {profile?.favCollection?.map(favoriteCollection => {
          <AddToFavCollection key={favoriteCollection._id} favoriteCollection={favoriteCollection}/>
        })}
        
      </section>

      <section>
        <h1> مستخدمين اخرين : </h1>
      </section>

      <EditProfile handleOpenProfile={handleOpenProfile} />
    </>
  )
}

export default Profile
