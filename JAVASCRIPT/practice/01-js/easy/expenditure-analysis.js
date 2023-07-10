/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //created an empty object to store the category and price of it.
  const total_amount_by_category = {};
  //then looping to each object in the transcatins array
  for(let i = 0; i < transactions[i]; i++){
    // creating a variable transcation and storing 
    const transaction = transactions[i];
    const {category, price} = transaction

    if(total_amount_by_category[category]){

    }

  }
  return [];
}

module.exports = calculateTotalSpentByCategory;
