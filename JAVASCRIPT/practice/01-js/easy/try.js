function calculateTotalSpentByCategory(transactions) {
    const totalAmountByCategory = {};
  
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const { category, price } = transaction;
  
        //logs
        console.log("data we get",transactions)
        console.log("one object is assignet to it",transaction)
        console.log("value assigned it it ",category,price)
        console.log(`Total spent for befor if statemten  ${category}: ${totalAmountByCategory[category]}`);

      if (totalAmountByCategory.hasOwnProperty(category)) {
        totalAmountByCategory[category] += price;
        console.log(`Total spent for if condition is true ${category}: ${totalAmountByCategory[category]}`);
      } else {
        totalAmountByCategory[category] = price;
        console.log(`Total spent for if condition is false ${category}: ${totalAmountByCategory[category]}`);
      }
      console.log("value assigned it it ",category,price)
      console.log(totalAmountByCategory)
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
  
  // Example data
  const transactions = [
    {
      itemName: 'Pizza',
      category: 'Food',
      price: 10,
      timestamp: 1656076800000,
    },
    {
      itemName: 'Burger',
      category: 'Food',
      price: 20,
      timestamp: 1656259600000,
    },
    {
      itemName: 'T-Shirt',
      category: 'Clothing',
      price: 15,
      timestamp: 1656019200000,
    },
  ];
  
  // Run the function with the sample data
  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);
  