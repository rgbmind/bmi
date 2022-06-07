// String validation & automated user error handling
export const transformString = (value: string) => {
  const arr = value
    .replace(/[,]/gim, '.')
    .replace(/([^0-9.])/gim, '')
    .replace(/\.(?=\.)/, '')
    .replace(/^00/, '0')
    .split('');

  if (arr[0] === '.') {
    arr.unshift('0');
  }
  const str = arr.join('');

  return str.replace(/^0[1-9]/, str.slice(1));
};
