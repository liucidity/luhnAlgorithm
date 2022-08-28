const check = function(payload) {
  let luhnArray = Array.from(payload);

  //every 2 digits starting from last double
  for (let i = luhnArray.length - 1; i > -1; i -= 2) {
    luhnArray[i] *= 2;
  }
  //sum all digits
  let arraySum = 0;
  luhnArray.forEach((element)=>{
    element = Number(element);
    //if result is >10, add digits
    if (element >= 10) {
      element -= 9;
    }
    arraySum += element;
  });

  const checkDigit = (10 - (arraySum % 10));

  return checkDigit;
};

module.exports = check;
// check("7992739871");