/**
 * const let等の変数宣言
 *
 */

// var val1 = "var";
// console.log(val1);

// // var変数は上書き可能
// val1 = "val1は上書き可能";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// letについて
// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "letの上書き";
// console.log(val2);

// // letの再宣言
// let val2 = "再宣言";
// console.log(val2);

// constについて
// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.age = 29;
// console.log(val4.age);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// console.log(val5);

/**
 * テンプレート文字列
 *
 */
// const name = "じゃけえ";
// const age = 28;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 *
 */
// const func2 = (str) => {
//   // returnのみならreturnを省略可能
//   return str;
// };

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 *
 */
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// // ここが分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * デフォルト値、引数
 *
 */
// name =の後がデフォルト値
// const sayHello = (name = "guest") => console.log(`こんにちは${name}さん！`);
// sayHello("安井");

/**
 *スプレッド構文 ...を記述するもの
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // // 配列の中身を展開
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// // 分割代入
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
// コピー
const arr6 = [...arr4];
console.log(arr6);
// 結合（+でできた配列とはまた別）
const arr7 = [...arr4, ...arr5];
console.log(arr7);
