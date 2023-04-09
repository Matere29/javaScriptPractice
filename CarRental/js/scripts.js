let carCost = 40; //car rental cost for a day
let totalCost1 = carCost * 3; //total for discount 1, if car is hired for 3 days or more
let totalCost2 = carCost * 7; //total for discount 2, if car is hired for 7 days or more
let day = 1;
const discount1 = 20;
const discount2 = 50;


for(day=1; day <= 3; day++){
    console.log('$',carCost);
    carCost = carCost + 40;
}   
console.log('Discounted total: $',totalCost1-discount1);

for(day = 1; day <= 4; day++){
    console.log('$',carCost);
    carCost = carCost + 40;   
}
console.log('Discounted total: $',totalCost2-discount2);




    