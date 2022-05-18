import React from 'react'
import PizzaCard from './PizzaCard';
import styles from '../styles/PizzaList.module.css';

function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore omnis voluptatem maiores dignissimos nihil amet modi, voluptate, dolor, obcaecati neque perferendis nesciunt. Totam sint vero voluptatibus repudiandae sit hic. Nostrum!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default PizzaList;