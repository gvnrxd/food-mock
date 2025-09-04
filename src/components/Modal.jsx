// Modal.jsx
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, title, children }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // 🔒 Lock body scroll
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    // focus the dialog on open
    queueMicrotask(() => boxRef.current?.focus());

    return () => {
      // ✅ Unlock body scroll
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(y || "0") * -1);

      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} aria-hidden="true">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={boxRef}
        onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
      >
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
