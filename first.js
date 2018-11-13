function repeatStringNumTimes(str, num) {
  // repeat after me
  let repStr = "";
  for (let x = 1; x <= num; x++){
  	repStr += str;
  }
  return repStr;
}

console.log(repeatStringNumTimes("abc", 3));