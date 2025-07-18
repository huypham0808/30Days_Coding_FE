const traiCay = ["cam", "xoai", "nho", "tao"];
//Add item to the end of Array: push
traiCay.push("bo");
console.log(traiCay);
//Duyet qua tung phan tu cua mang va tao array moi tu array cu
const number = [1, 2, 3, 4, 5];
console.log(number);
const numberNew = number.map((item) => item * 2);
console.log(numberNew);
//Bien doi phan tu trong Array thanh Object
const conVertArr = number.map((item) => ({ so: item }));
console.log(conVertArr);

const traiCayNew = traiCay.map((item) => item + " !");
console.log(traiCayNew);
//Distructuring: trich xuat du lieu tu Array or Object

//Voi gia tri mac dinh
const [, item2, item3, item4, item5, item6 = "404"] = traiCay;
console.log(item2, item5);

//Voi rest paramter
const [trai1, ...remainItem] = traiCay;
console.log(trai1);
console.log(remainItem);

const user = {
  name: "Huy",
  age: 20,
  gioiTinh: "Male",
};
const { name: ten1, age: tuoi1, gioiTinh = "Male" } = user; // luu y ten bien trong { } phai trung voi ten thuoc tinh hoac dung alias
console.log("Ten 1 " + ten1);
console.log("Tuoi 1 " + tuoi1);
console.log("Gioi tinh " + gioiTinh);

//destructuring with rest param
const { name, ...param } = user;
console.log(param);
//Destructuring voi doi tuong trong ham Javascript
const donHang = {
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 500000,
};

function xuLyDonHang({ maDonHang, tienTe, tongTien }) {
  console.log(`Ma don hang: ${maDonHang}`);
  console.log(`Tien te: ${tienTe}`);
  console.log(`Tong tien: ${tongTien}`);
}
xuLyDonHang(donHang);
console.log("--------------Function Xu ly don hang 2----------------");
function xuLyDonHang2({ maDonHang = 0, tienTe = "USD", tongTien = 0 }) {
  console.log(`Ma don hang: ${maDonHang}`);
  console.log(`Tien te: ${tienTe}`);
  console.log(`Tong tien: ${tongTien}`);
}
xuLyDonHang2({ maDonHang: 102 });
console.log("--------------Function Xu ly don hang 3----------------");
function xuLyDonHang3({ maDonHang, ...restParam }) {
  console.log(`Ma don hang 3: ${maDonHang}`);
  console.log(restParam);
}
xuLyDonHang3({
  maDonHang: 101,
  tienTe: "USD",
  tongTien: 700000,
});

//Spread Operator: them phan tu moi vao trong mang dua tren mang cu
console.log("--------------Spread Operator----------------");

let favorite = ["doc sach", "nghe nhac"];
const newFavor = "du lich";
const newFavor2 = ["du lic", "xem phim"];
favorite = [...favorite, newFavor, "abc", ...newFavor2];
console.log(favorite);
console.log(
  "--------------Spread Operator: Cap nhat thong tin nguoi dung----------------"
);

let user1 = {
  id: 1,
  name: "ABCV",
  email: "abc@gmail.com",
};

const update = {
  address: "Dia chi user",
  role: "admin",
};

user1 = { ...user1, ...update };
console.log(user1);
