// Simulating an asynchronous function to fetch product data from an API
function fetchProductData(callback) {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
        const productData = { id: 101, name: "ASUS_Laptop", price: 45000 };
        callback(null, productData);
    }, 1000);
}

// Simulating an asynchronous function to process product data
function processProductData(productData, callback) {
    // Simulating data processing delay with setTimeout
    setTimeout(() => {
        // Adding additional information to product data
        productData.discountedPrice = productData.price * 0.9;
        callback(null, productData);
    }, 1000);
}

// Function to display product data
function displayProductData(productData, callback) {
    // Simulating display delay with setTimeout
    setTimeout(() => {
        console.log("Product ID:", productData.id);
        console.log("Product Name:", productData.name);
        console.log("Price:", productData.price);
        console.log("Discounted Price:", productData.discountedPrice);
        callback();
    }, 1000);
}

// Function to handle errors
function handleProductError(error) {
    console.error("Error:", error);
}

// Callback hell version: fetch, process, and display product data
fetchProductData((fetchError, productData) => {
    if (fetchError) {
        handleProductError(fetchError);
    } else {
        processProductData(productData, (processError, processedProductData) => {
            if (processError) {
                handleProductError(processError);
            } else {
                displayProductData(processedProductData, (displayError) => {
                    if (displayError) {
                        handleProductError(displayError);
                    } else {
                        console.log("Product data displayed successfully.");
                    }
                });
            }
        });
    }
});
