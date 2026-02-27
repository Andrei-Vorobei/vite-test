import clsx from 'clsx';

// Импортируем стили как объект
import styles from './info-block.module.css';

function InfoBlock({ title, caption, color }) {
  const textColor = color === 'red' ? styles.rootColorRed : styles.rootColorWhite;

  return (
    /* Пользуемся свойствами объекта style как названиями CSS-классов */
    <div className={clsx(styles.root, textColor)}>
      <p className={styles.title}>{title}</p>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}

export default InfoBlock;
