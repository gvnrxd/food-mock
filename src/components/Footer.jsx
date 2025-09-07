import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>123 Pizza Ave Palm Beach, FL 33401</p>
      <p>
        Phone: <a href="tel:+ENTER_NUMBER_HERE">+1 (561) 000-0000</a>
      </p>
      <p>© {year} Jo's Pizza. All rights reserved.</p>
    </footer>
  );
}
