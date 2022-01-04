/**
 * const let
 */

// var val1 = "var変数";
// console.log(val1);

// // ウワガキカノウ
// val1 = "varを上書き";
// console.log(val1);

// //
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "上書き";
// console.log(val2);

// // 再宣言は不可能
// let val2 = "再宣言はダメ";

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// // val3 = "const 変数を上書き";

// const val3 = "const 変数を上書き";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name :"じゃけ",
//   age: 28
// }

// val4.name = "jak";
// console.log(val4.name);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog","cat"];
// val5[0] = "bird";

// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "OB"
//  const age = 28

//  //従来の方法
//  const message1  = "私の名前は" + name + "です。" + "年齢は" + age + "です"
//  console.log(message1)

//  //テンプレート文字列を用いた方法
//  const message2 = `私の名前は${name}です。年齢は${age}です`

/**
 * アロー関数
 */

//従来の関数
//  function func1(str)
// {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;

// console.log(func3(10,20))

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "OB",
//    age: 28
//  }

//  //いちいちmyProfileと書いていると大変
//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
//  console.log(message1);

// 同じ名前にしないといけない
//  const {name , age} = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`;
//  console.log(message2);

// const myProfile = ['OB',28]
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`

// console.log(message3)

// ///配列の分割代入は名前をつけれる
// const [namee, age ] = myProfile;
// const message4 = `名前は${namee}です。年齢は${age}歳です`
// console.log(message4)

/**
 * デフォルト値
 */
// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん！`)
// sayHello();

/**
 * スプレッド構文 ...
 */

//  //配列の展開
//  const arr1 = [1,2];
// //  console.log(arr1);
// //  console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);

// //以下は同じことをしている
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //　まとめる
// const arr2 = [1, 2, 3, 4, 5];

// //スプレッド構文と分割代入の合わせ技
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];

// //スプレッド構文で配列をコピーすると元の配列に影響を与えない
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];

// // =で代入すると元の値が変わってしまうのでだめ。
// const arr8 = arr4;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "OB"];
//  for (let index = 0; index <nameArr.length; index++)
// {
//   console.log(`${index + 1}番めは、${nameArr[index]}です`)
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name
// })
// console.log(nameArr2)

// 第二引数を指定するとindexを使用できる
// nameArr.map((name,index) => console.log(`${index + 1}番めは、${nameArr[index]}です` ))

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=> {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "OB") {
//     return name + "くん";
//   } else {
//     return `${name}さま`;
//   }
// });

// console.log(newNameArr);
