//fixed initialisation of variables
let date = 2050
const status = 'parent'
let count = 0

if (date = 2050) {
    //closed an opened bracket
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
    //deleted let, because it is declared globally
	  count = count + 4

	if (status == "student") {
	  console.log('June', 'Youth Day')
	 count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
        //deleted let, because it is declared globally
	 count = count + 3

	if (status =="parent") {
	  console.log(date, 'Christmas Day')
          //deleted let, because it is declared globally
	  count = count + 1
  }

	console.log(date, 'Day of Goodwill')
        //deleted let, because it is declared globally
	 count = count + 1
}
date = 2050;

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)