import MenuCard from "./MenuCard";
import styles from "./FeaturedMenu.module.css";
import PizzaOfDay from "../assets/pizza-of-the-day.jpg";
import ChefSpecial from "../assets/chefs-special.jpeg";
import Drinks from "../assets/drinks.webp";

export default function FeaturedMenu() {
  return (
    <section className={styles.section}>
      <h2 className={styles.secHeader}>Featured Menu</h2>

      <div className={styles.grid}>
        <MenuCard
          title="Pizza of the Day"
          img={PizzaOfDay}
          alt="Freshly baked pizza of the day"
          desc="A rotating favorite using seasonal ingredients."
        />
        <MenuCard
          title="Chef's Special"
          img={ChefSpecial}
          alt="Chef slicing a specialty pizza"
          desc="Our chef’s curated pick—bold flavors, limited daily."
        />
        <MenuCard
          title="Drinks"
          img={Drinks}
          alt="Assorted chilled beverages"
          desc="Sodas, iced tea, and sparkling options to pair with your slice."
        />
      </div>
    </section>
  );
}
