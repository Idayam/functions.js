//Create an array containing the names of all items in the inventory maximum of 10.
    let grocery=["cabbages","watermelons","passions","bananas","mangoes","oranges","eggs","apples","berries"]

 //Create a separate array with the corresponding stock quantities of each item maximum of 10.
    let stockQuantities=[20,10,50,30,60,70,33,35,80]


  //Write a function to add a new item to the inventory, updating both arrays
    function addnewItem(item,quantities){
      if(grocery.length>=10||stockQuantities.length>=10){
         console.log("maximum items reached")
      }
      else{
        stockQuantities.push(quantities)
        grocery.push(item)
      }

     
    }
    addnewItem("pineapple",9)
    console.log(grocery)
    console.log(stockQuantities)





 // Function to update the stock quantity of an existing item
 function updateStock(name, quantities) {
  let index = grocery.indexOf(name);
   if (index !== -1) {
    stockQuantities[index] = quantities;
    console.log(`Updated stock of ${name} to ${quantities}`);
   } else {
    console.log(`${name} not found in grocery`);
  }
 }
 updateStock("eggs", 15)
 console.log(stockQuantities)
//// Function to calculate the total number of items in the inventory
  function countItems() {
  let count = 0;
  for (let i = 0; i < grocery.length; i++) {
     count += stockQuantities[i];
  }
   return count;
  }
   console.log(countItems())
//// Function to find the item with the lowest stock quantity
function findLowstock() { 
  let lowStock = stockQuantities[0];
  let minIndex = 0;
  for (let i = 1; i < stockQuantities.length; i++) {
    if (stockQuantities[i] < lowStock){
      lowStock = stockQuantities[i];
      minIndex = i;  
    }
  }
  return grocery[minIndex];

 }
   console.log(findLowstock());






