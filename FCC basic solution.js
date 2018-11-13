function repeatStringNumTimes(str, num) {
  // repeat after me
  let repStr = "";
  while (num > 0){
  	repStr += str;
  	num--
  }
  return repStr;
}

console.log(repeatStringNumTimes("abc", 3));