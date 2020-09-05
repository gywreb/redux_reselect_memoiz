// chạy code bằng 'node memoization.js'
const add = (a, b) => {
  // tạo cache cho hàm add
  if (!add.cache) {
    add.cache = [];
  }

  //   tạo cặp input để kiểm tra xem đã từng nhập vào chưa (vs 1 cặp đảo)
  let input = `${a}_${b}`;
  let rev_input = `${b}_${a}`;

  //   kiểm tra input đã từng nhập vào chưa ? nếu có thì lấy kết quả đã lưu ở trong cache => không tính toán nữa
  if (add.cache[input]) return add.cache[input];
  if (add.cache[rev_input]) return add.cache[rev_input];

  //   nếu chưa thì tính toán bằng input mới nhập và lưu vào cache
  const res = { sum: a + b };
  add.cache[input] = res;
  add.cache[rev_input] = res;
  return res;
};

const sum1 = add(1, 2);
const sum2 = add(2, 3);
const sum3 = add(2, 1);

console.log(sum1 === sum2); // false vì input khác nhau
console.log(sum1 === sum3); // true vì input giống nhau => lấy kêt quả lưu trong cache
