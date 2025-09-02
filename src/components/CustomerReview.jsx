import styles from "./CustomerReview.module.css";

export default function CustomerReview({ name, desc, rating = 5, avatar }) {
  return (
    <figure className={styles.card} aria-label={`Review by ${name}`}>
      <blockquote className={styles.quote}>{desc}</blockquote>

      <figcaption className={styles.footer}>
        {avatar && (
          <img
            className={styles.avatar}
            src={avatar}
            alt={`${name}'s avatar`}
            loading="lazy"
          />
        )}
        <div className={styles.meta}>
          <span className={styles.name}>{name}</span>
          <span
            className={styles.stars}
            aria-label={`${rating} out of 5 stars`}
          >
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
