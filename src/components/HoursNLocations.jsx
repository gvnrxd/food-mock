import styles from "./HoursNLocations.module.css";
import GoogleMap from "../assets/google-map-sample.webp";

export default function HoursNLocation() {
  return (
    <>
      <h2 className={styles.secHeader}>Hours &amp; Locations</h2>

      <section className={styles.secContainer}>
        <img className={styles.map} src={GoogleMap} alt="Map to our location" />

        <ul className={styles.hoursList}>
          <li className={styles.row}>
            <span className={styles.days}>Monday – Thursday</span>
            <span className={styles.hours}>11am – 9pm</span>
          </li>
          <li className={styles.row}>
            <span className={styles.days}>Friday – Saturday</span>
            <span className={styles.hours}>11am – 10pm</span>
          </li>
        </ul>
      </section>
    </>
  );
}
