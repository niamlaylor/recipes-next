import styles from '../styles/LabelList.module.css'
import LabelListItem from './LabelListItem';

export default function LabelList({ labels }) {

  const recipeLabels = labels.map((label, index) => {
    return (
      <LabelListItem
        key={index}
        label={label}
      />
    )
  })

  return (
    <ul className={styles.labelList}>
      {recipeLabels}
    </ul>
  );
}