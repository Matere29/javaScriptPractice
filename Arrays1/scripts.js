
// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}
/*
// Only edit below


const [firstList, secondList, thirdList] = data.lists;

const extractBiggest = () => {
  const first = firstList[firstList.length - 1] || -Infinity;
  const second = secondList[secondList.length - 1] || -Infinity;
  const third = thirdList[thirdList.length - 1] || -Infinity;

  if (first > second && first > third) {
    return firstList.pop();
  }

  if (second > third) {
    return secondList.pop();
  }

  return thirdList.pop();
};
const result = []

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
*/
// Only edit below

const [firstList, secondList, thirdList] = data.lists;


const extractBiggest = () => {
  const first = firstList[firstList.length - 1] || -Infinity;
  const second = secondList[secondList.length - 1] || -Infinity;
  const third = thirdList[thirdList.length - 1] || -Infinity;
  
  if (first > second && first > third) {
	  return firstList.pop();
	}
  
	else if (second > third) {
	  return secondList.pop();
	}else
  
	return thirdList.pop();
	
}

const result = []

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)