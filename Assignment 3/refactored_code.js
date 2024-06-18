// Simulating an asynchronous function to fetch product data from an API
function fetchProductData() {
    return new Promise((resolve, reject) => {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
            const productData = { id: 101, name: "ASUS_Laptop", price: 45000 };
            resolve(productData);
        }, 1000);
    });
}

// Simulating an asynchronous function to process product data
function processProductData(productData) {
    return new Promise((resolve, reject) => {
        // Simulating data processing delay with setTimeout
        setTimeout(() => {
            // Adding additional information to product data
            productData.discountedPrice = productData.price * 0.9;
            resolve(productData);
        }, 1000);
    });
}

// Function to display product data
function displayProductData(productData) {
    return new Promise((resolve, reject) => {
        // Simulating display delay with setTimeout
        setTimeout(() => {
            console.log("Product ID:", productData.id);
            console.log("Product Name:", productData.name);
            console.log("Price:", productData.price);
            console.log("Discounted Price:", productData.discountedPrice);
            resolve();
        }, 1000);
    });
}

// Async function to fetch, process, and display product data
async function fetchProcessAndDisplayProductData() {
    try {
        const productData = await fetchProductData();
        const processedProductData = await processProductData(productData);
        await displayProductData(processedProductData);
        console.log("Product data displayed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Calling the async function to execute the process
fetchProcessAndDisplayProductData();
