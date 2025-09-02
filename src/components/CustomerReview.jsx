import styles from "./CustomerReview.module.css";

export default function CustomerReview({ name, desc, ...props }) {
  return (
    <>
      <div className={styles.reviewCard}>
        <p>{desc}</p>
        <h3>{name}</h3>
      </div>
    </>
  );
}
