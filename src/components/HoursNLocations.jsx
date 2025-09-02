import styles from "./HoursNLocations.module.css";
import MapImg from "../assets/google-map-sample.webp";

export default function HoursSimple() {
  return (
    <section className={styles.section} aria-labelledby="hours-title">
      <h2 id="hours-title" className={styles.title}>
        Hours & Locations
      </h2>

      <div className={styles.mapWrapper}>
        <img className={styles.map} src={MapImg} alt="Map showing location" />
      </div>

      <div className={styles.info}>
        <div className={styles.block}>
          <h3 className={styles.h3}>Address</h3>
          <p className={styles.text}>
            123 Pizza Ave
            <br />
            Palm Beach, FL 33401
          </p>
          <a
            className={styles.link}
            href="https://maps.google.com/?q=123 Pizza Ave, Palm Beach FL"
          >
            Get directions →
          </a>
        </div>

        <div className={styles.block}>
          <h3 className={styles.h3}>Hours</h3>
          <ul className={styles.hours}>
            <li>
              <span>Mon – Thu</span>
              <span>11:00am – 9:00pm</span>
            </li>
            <li>
              <span>Fri – Sat</span>
              <span>11:00am – 10:00pm</span>
            </li>
            <li>
              <span>Sun</span>
              <span>12:00pm – 8:00pm</span>
            </li>
          </ul>
          <a className={styles.link} href="tel:+15615551234">
            (561) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}
