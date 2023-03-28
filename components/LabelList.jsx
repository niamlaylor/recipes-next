import styles from '../styles/LabelList.module.css'
import LabelListItem from './LabelListItem';

export default function(props) {
  return (
    <ul className={styles.labelList}>
      <LabelListItem label={"Breakfast"}/>
      <LabelListItem label={"Awesome"}/>
    </ul>
  );
}