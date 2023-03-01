// function duplicateTest(nums) {
//     let count = {};
//     let total = [];
  
//     // count the occurrences of each element in the array
//     for (let i = 0; i < nums.length; i++) {
//       let element = nums[i];
//       if (count[element] !== undefined) {
//         count[element]++;
//       } else {
//         count[element] = 1;
//       }
//     }
  
//     // loop over the array again and only push the non-duplicate elements to the total array
//     for (let i = 0; i < nums.length; i++) {
//       let element = nums[i];
//       if (count[element] === 1) {
//         total.push(element);
//       }
//     }
  
//     return total;
//   }
  
//   console.log(duplicateTest([1, 2, 2, 3])); // [1, 3]
  

// console.log(dulicateTest([1,2,2,3]))


// import React from 'react';
// import {useState} from 'react'

// import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
// import React from 'react';
import React from 'react';
import {useState} from 'react'

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    const [discount, setDiscount] = useState('$100')
    
    const clickHandler =()=>{
        setDiscount("$75")
    }
    return (
        <div>
            <p>{discount}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}
