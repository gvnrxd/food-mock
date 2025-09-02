import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Jo’s Pizza — Delicious Food,{" "}
          <span className={styles.break}>Made Fresh Daily</span>
        </h1>

        <div className={styles.actions} aria-label="Primary actions">
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="/menu">
            View Menu
          </a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="/order">
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
}
