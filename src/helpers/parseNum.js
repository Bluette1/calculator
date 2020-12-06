const parseNum = number => {
  let num = number;
  const parsed = parseInt(num, 10);
  if (num.includes('.')) {
    num = parseFloat(num);
  } else {
    num = parsed;
  }
  return num;
};
export default parseNum;
