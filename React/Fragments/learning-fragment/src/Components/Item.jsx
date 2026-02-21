import React from 'react'
import styles from"./Item.module.css"
const Item = (props) => {

  return (
    <>
    
      <li key={props.fooditem} className={`${styles.item} list-group-item` }><span className={styles.itemspan}>{props.fooditem}</span></li>

    </>
  )
}

export default Item
