import styles from '../styles/LabelListItem.module.css'

export default function(props) {
  return (
    <li className={styles.labelListItem}>
      {props.label}
    </li>
  );
}