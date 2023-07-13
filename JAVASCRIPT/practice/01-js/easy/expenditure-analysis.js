/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // creating an object that will store category and price
  const totalAmountByCategory = {};
  //loop to itreate over evert object in the array
  for (let i = 0; i < transactions.length; i++) {
    //creating a new object to store one object at a time 
    const transaction = transactions[i];
    //this is called destructuring where
    //const { category, price } = transaction; is extracting the category and price properties from the transaction object and assigning their values to the variables category and price, respectively.
    const { category, price } = transaction;
    console.log(category, price)
    //now check if the category is alredy they or not if it is there then we will add the amount to that category if not then add that new category and the add the amount.

    //so it is like key and value 
    //ex- totalAmountByCategory[category] is not equal to Food : 20
    if (totalAmountByCategory[category]) {
    //and here it is adding to the value 
      totalAmountByCategory[category] += price;
    } else {
      totalAmountByCategory[category] = price;
    }
  }

  const result = [];
  for (const category in totalAmountByCategory) {
    result.push({
      category: category,
      totalSpent: totalAmountByCategory[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
