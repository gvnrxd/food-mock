import { useState } from "react";
import styles from "./Hero.module.css";
import Modal from "./Modal.jsx";
import FullMenu from "../assets/fullMenu.png";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const menuItem = {
    key: "menu",
    title: "Full-Menu",
    menuImg: FullMenu,
    alt: "Freshly baked pizza choices",
    desc: "Choose your style of Pizza",
  };

  const handleCardClick = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

  return (
    <header className={styles.hero} role="banner">
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Jo’s Pizza — Delicious Food,{" "}
          <span className={styles.break}>Made Fresh Daily</span>
        </h1>

        <div className={styles.actions} aria-label="Primary actions">
          <button
            type="button"
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => handleCardClick(menuItem)}
          >
            View Menu
          </button>

          <a className={`${styles.btn} ${styles.btnOutline}`} href="/order">
            Order Online
          </a>
        </div>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={activeItem?.title || "Menu item"}
      >
        {activeItem && (
          <div className={styles.modalBody}>
            <div className={styles.modalText}>
              <h3>{activeItem.title}</h3>
              {/* If you have a combined menu image, show it here */}
              {activeItem.menuImg && (
                <img
                  src={activeItem.menuImg}
                  alt={`${activeItem.title} menu`}
                />
              )}
            </div>
          </div>
        )}
      </Modal>
    </header>
  );
}

