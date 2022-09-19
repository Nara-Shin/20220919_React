import $ from 'jquery';

const onMin = (x, y) => {
  const result = x - y;
  console.log(`${x} - ${y} = ${result}`);
}

export const x = 100;
export default onMin;