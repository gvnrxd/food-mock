// FeaturedMenu.jsx
import { useState } from "react";
import MenuCard from "./MenuCard";
import Modal from "./Modal.jsx";
import styles from "./FeaturedMenu.module.css";

import PizzaOfDay from "../assets/pizza-of-the-day.jpg";
import Drinks from "../assets/drinks.webp";
import Desserts from "../assets/dessert-img.gif";

import DrinkMenu from "../assets/drinkMenu.png";
import PizzaMenu from "../assets/pizzaMenu.png";
import DessertMenu from "../assets/dessertMenu.png";

export default function FeaturedMenu() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleCardClick = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

  const items = [
    {
      key: "pizzas",
      title: "Pizzas",
      img: PizzaOfDay,
      menuImg: PizzaMenu,
      alt: "Freshly baked pizza choices",
      desc: "Choose your style of Pizza",
    },
    {
      key: "dessert",
      title: "Desserts",
      img: Desserts,
      menuImg: DessertMenu,
      alt: "Freshly baked chocolate brownie",
      desc: "Finish your meal on a sweet note with our desserts",
    },
    {
      key: "drinks",
      title: "Drinks",
      img: Drinks,
      menuImg: DrinkMenu,
      alt: "Assorted chilled beverages",
      desc: "Sodas, iced tea, and sparkling options to pair with your slice.",
    },
  ];

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.secHeader}>Featured Menu</h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <MenuCard
              key={it.key}
              title={it.title}
              img={it.img}
              alt={it.alt}
              desc={it.desc}
              onClick={() => handleCardClick(it)}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={activeItem?.title || "Menu item"}
      >
        {activeItem && (
          <div className={styles.modalBody}>
            <img
              className={styles.modalImg}
              src={activeItem.img}
              alt={activeItem.alt}
              loading="lazy"
            />
            <div className={styles.modalText}>
              <h3>{activeItem.title}</h3>
              <img src={activeItem.menuImg} />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
