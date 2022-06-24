/* eslint-disable */

import { useEffect } from 'react';


export function updateQuality(products) {
  for (let i = 0; i < products.length; i++) {
    const { sellIn, isSecondHand } = products[i];
    switch (products[i].type) {
      case 'TICKETS':
        products[i].quality +=
          sellIn <= 0
            ? 0
            : sellIn <= 10
                ? 2
                : 1
        break;
      case 'NORMAL':
        products[i].quality -= sellIn === 0 || isSecondHand ? 2 : 1
        break;
    }
    products[i].sellIn -= 1;
    if (products[i].quality < 0)
      products[i].quality = 0;
    if (products[i].sellIn < 0)
      products[i].sellIn = 0;
  }
  return products;
}

export function Task2() {
    useEffect(() => {
        const products = [
            {
                name: 'concert a',
                type: 'TICKETS',
                quality: 30,
                sellIn: 12,
            },
            {
                name: 'concert b',
                type: 'TICKETS',
                quality: 30,
                sellIn: 8,
            },
            {
                name: 'concert c',
                type: 'TICKETS',
                quality: 30,
                sellIn: 1,
            },
            {
                name: 'macbook',
                type: 'NORMAL',
                quality: 30,
                sellIn: 0,
                isSecondHand: false,
            },
            {
                name: 'monitor',
                type: 'NORMAL',
                quality: 30,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'keyboard',
                type: 'NORMAL',
                quality: 0,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'mouse',
                type: 'NORMAL',
                quality: 20,
                sellIn: 5,
                isSecondHand: true,
            },
        ];

        const updated = updateQuality(products);
        console.log(updated);
    }, []);
    return null;
}
