import styles from "./NavBar.module.css";
import PizzaIcon from "../assets/pizza-nav-logo.png";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <a href="#">
          <img src={PizzaIcon} />
        </a>
        <ul>
          <li>
            <a href="#menu-title">Menu</a>
          </li>
          <li>
            <a href="#about-title">About</a>
          </li>
          <li>
            <a href="#reviews-title">Reviews</a>
          </li>
          <li>
            <a href="#hours-title">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
