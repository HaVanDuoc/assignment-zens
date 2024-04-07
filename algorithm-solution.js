// Function handle Sort Array
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

// Function handle sum array
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

// Function find min in array
const findMin = (arr) => {
  if (arr.length === 0) {
    return "Empty Array";
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// Function find max in array
const findMax = (arr) => {
  if (arr.length === 0) {
    return "Empty Array";
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// Function find even elements in array
const findEvenElement = (arr) => {
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }

  return even;
};

// Function find odd elements in array
const findOddElement = (arr) => {
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }

  return odd;
};

const miniMaxSum = (arr) => {
  const sum = sumArray(arr);
  const minElement = findMin(arr);
  const maxElement = findMax(arr);
  const minSum = sum - maxElement;
  const maxSum = sum - minElement;

  // Cách 2
  //   const sort = sortArray(arr);
  //   const sum = sumArray(arr);
  //   const minSum = sum - arr[arr.length - 1];
  //   const maxSum = sum - arr[0];

  console.log(minSum + " " + maxSum);
};

const input = "2 1 4 3 5";
const arr = input.split(" ").map(Number); // chuyển thành mảng số nguyên
miniMaxSum(arr);

// console.log("Even array", findEvenElement(arr));
// console.log("Odd array", findOddElement(arr));
