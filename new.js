let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
  ];
  function interestCalculator(data) {
    for ( let i of data) {
      if (i.principal >= 2500 && i.time > 1 && i.time < 3) {
        i.rate = 3;
      } else if (i.principal >= 2500 && i.time >= 3) {
        i.rate = 4;
      } else if (i.principal < 2500 || i.time <= 1) {
        i.rate = 2;
      } else {
        i.rate = 1;
      }
      i.interest = (i.principal * i.rate * i.time) / 100;
    }
    let interestData = [...data];
    console.log(interestData);
    return interestData;
  }
  interestCalculator(data);

let numArr=[12,18,100,23,45,4,234];
//let numFilter=numArr.filter(function (params) {
//    return numArr.length;
//})
function minNum(arr){
return Math.min.apply(null, arr);

}
minNum(numArr);


//onsole.log(numFilter);















   




