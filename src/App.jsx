import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await fetch('http://localhost:4000/');
      const data = await response.json();
      setFruits(data.slice(0, 10));
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
    <div className={styles.cards}>
      {fruits.map((fruit, index) => (
        <div key={index} className={styles.card}>
          <h3>{fruit.name}</h3>
          <h4>Nutrition of the fruit (per 100g):</h4>
          <ul>
            <li>Carbohydrates: {fruit.nutritions.carbohydrates}</li>
            <li>Protein: {fruit.nutritions.protein}</li>
            <li>Fat: {fruit.nutritions.fat}</li>
            <li>Calories: {fruit.nutritions.calories}</li>
            <li>Sugar: {fruit.nutritions.sugar}</li>
          </ul>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;