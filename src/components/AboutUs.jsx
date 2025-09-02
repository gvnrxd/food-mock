import styles from "./AboutUs.module.css";
import CrewImg from "../assets/crew.webp";

export default function AboutUs() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <figure className={styles.media}>
          <img
            className={styles.img}
            src={CrewImg}
            alt="Jo’s Pizza crew preparing fresh pies in the kitchen"
            loading="lazy"
          />
        </figure>

        <div className={styles.content}>
          <h2 id="about-title" className={styles.secHeader}>
            About Us
          </h2>
          <p>
            At Jo’s Pizza, we believe pizza is more than just food—it’s an
            experience best shared with friends, family, and neighbors. That’s
            why every pie starts with hand-tossed dough, fresh local
            ingredients, and a love for authentic flavor.
          </p>
        </div>
      </div>
    </section>
  );
}
