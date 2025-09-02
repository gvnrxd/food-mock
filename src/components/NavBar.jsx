import styles from "./NavBar.module.css";
import PizzaIcon from "../assets/pizza-nav-logo.png";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <img src={PizzaIcon} />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#about-title">About</a>
          </li>
          <li>
            <a href="#hours-title">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
