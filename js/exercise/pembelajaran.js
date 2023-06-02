
//mencari angka dengan for
// let angka =[4,2,6,7,4,8,2,1,9];

// const newAngka=[];
// for(let i = 0;i < angka.length;i++){
//     if(angka[i] >= 3 ){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// *filter
//function callback
// const newAngka =angka.filter(function(dataAngka){
//    return  dataAngka >= 3;
// });

// console.log(newAngka);

//*map : petakan semua elemen pada array dengan sebuah fungsi yang baru
// map =kalikan angka dengan dua

// const newAngka = angka.map(function(dataAngka){
//     return dataAngka * 2;
// });
// console.log(angka);
// console.log(newAngka);

//*reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator,currentValue)=>
// accumulator + currentValue, 10);

// console.log(newAngka)

//metode chaining atau penggabungan antara filter,map dan reduce
// cari angka > 5
// kita kalikan 3
// jumlahkan

let angka =[4,2,6,7,4,8,2,1,9];
const hasil =angka.filter(a => a > 5)//6,7,8,9
    .map(a => a * 3)//18,21,24,27
    .reduce((acc,cur)=> acc + cur);//90

    console.log(hasil);
    

