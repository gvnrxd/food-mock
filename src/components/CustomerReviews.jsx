import styles from "./CustomerReviews.module.css";
import Review from "./CustomerReview";

export default function CustomerReviews() {
  return (
    <>
      <h2 className={styles.secHeader} id="reviews-title">
        Customer Reviews
      </h2>
      <div className={styles.reviewSec}>
        <Review
          name="Sarah M."
          desc="The best pizza I've ever had! Always Fresh and full of flavor!!"
        />
        <Review
          name="John D."
          desc="Amazing food and wonderful service. Highly recommend!"
        />
      </div>
    </>
  );
}
