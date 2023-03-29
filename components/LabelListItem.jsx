import styles from '../styles/LabelListItem.module.css'

export default function LabelListItem(props) {
  return (
    <li className={styles.labelListItem}>
      {props.label}
    </li>
  );
}