// String validation & automated user error handling
const transformString = (value: string | any) => {
  const arr = value
    .replace(/[,]/gim, '.')
    .replace(/([^0-9.])/gim, '')
    .replace(/\.(?=\.)/, '')
    .replace(/^00/, '0')
    .split('');

  let dotCounter = 0;

  if (arr[0] === '.') {
    arr.unshift('0');
    dotCounter++;
  }

  for (let i = 1; i < arr.length; i++) {
    if (dotCounter > 1 && arr[i] === '.') {
      arr.splice(i, 1);
    } else {
      dotCounter++;
    }
  }

  const str = arr.join('');

  return str.replace(/^0[1-9]/, str.slice(1));
};

export default transformString;
