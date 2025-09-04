import styles from "./MenuCard.module.css";

export default function MenuCard({ title, desc, img, alt, onClick }) {
  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.media}>
        <img
          className={styles.img}
          src={img}
          alt={alt || title}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </article>
  );
}
