console.log("This function will analyze an array of numbers and return the max, min, average, and even numbers in the array.");

function analyzeArray(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        console.log("Array is empty");
        return "Array is empty";
    }

    // Initialize variables
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    let evenNum = [];

    // Iterate through the array to find min, max, and add even numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];  // Add each element to sum
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i]);  // Add even numbers to the evenNum array
        }
    }

    // Calculate the average
    let avg = sum / arr.length; 

    // Create an object to store the results
    const result = {
        max,
        min,
        avg,  
        evenNum
    };

    console.log("Max: The maximum value in the array, which would be " + max);
    console.log("Minimum: The minimum value in the array, which would be " + min);
    console.log("Average: The average of all the numbers in the array, which would be " + avg);
    console.log("Even numbers: An array of all the even numbers in the array, which would be " + "[" + evenNum + "]");

    return result;
}

// Example array to analyze
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results = analyzeArray(testArray);
console.log(results);
