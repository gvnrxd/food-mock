import styles from "./AboutUs.module.css";

import CrewImg from "../assets/crew.webp";

export default function CustomerReviews() {
  return (
    <>
      <div className={styles.aboutUsBox}>
        <img className={styles.crewImg} src={CrewImg} />
        <div className={styles.textBox}>
          <h1 className={styles.secHeader}>About Us</h1>
          <p>
            At Jo Pizza, we believe pizza is more than just food — it’s an
            experience best shared with friends, family, and neighbors. That’s
            why every pie we make starts with hand-tossed dough, fresh local
            ingredients, and a love for authentic flavor.
          </p>
        </div>
      </div>
    </>
  );
}
