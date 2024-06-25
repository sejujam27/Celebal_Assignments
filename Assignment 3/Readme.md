# Week 3 Assignment : 

## Refactor an existing piece of code that uses callbacks for async operations to use Promises and Async/Await for better readability and error handling.

### In this example :
### Functions Used (function_coded.js) : 

#### We can run the code in terminal using 'node function_code.js'
1. fetchOrderData()
   - Purpose: Simulates an asynchronous function to fetch order data from an API.
2. processOrderData(orderData)
   - Purpose: Simulates an asynchronous function to process order data.
3. displayOrderData(orderData)
   - Purpose: Simulates an asynchronous function to display order data.

### Async/Await Function (refactored_code.js)
4. fetchProcessAndDisplayOrderData()
   - Purpose: An async function that orchestrates the fetching, processing, and displaying of order data.
5. Calling the async function
   - Purpose: Starts the entire process by calling the async function fetchProcessAndDisplayOrderData().

### Summary
1. Promises: Used to handle asynchronous operations.
2. async/await: Simplifies writing and reading asynchronous code.
3. fetchProcessAndDisplayOrderData(): Ensures each step (fetch, process, display) happens sequentially and handles errors gracefully.
   
