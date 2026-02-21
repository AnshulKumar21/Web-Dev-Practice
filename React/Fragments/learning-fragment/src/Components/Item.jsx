import React from 'react'
import styles from"./Item.module.css"
const Item = ({fooditem, HandleBuyButtonClick}) => {
 
  return (
    <>
    
      <li key={fooditem} className={`${styles.item} list-group-item` }><span className={styles.itemspan}>{fooditem}</span><button className={`${styles.button} btn btn-info`}
      onClick={HandleBuyButtonClick}
      
      >Buy</button></li>

    </>
  )
}

export default Item
