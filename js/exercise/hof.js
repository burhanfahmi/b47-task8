//foreach bisa langsung jalan
const angka =[1,2,3,4,5,6];
angka.forEach(function(a){
     console.log(a + 2);
});


//map ditampung lagi dulu
const NewAngka=[1,2,3,4,5,6];
const dataAngka = NewAngka.map((item)=>{
    return item * 2;
});
console.log(dataAngka);

//filter ( menyaring )
const arr =[1,2,3,4,5];
const eventNumber = arr.filter((item)=>{
    return item % 2 == 0;
});
console.log(eventNumber);

//reduce( item itu nilai awal dari reduce)
const arr1 =[1,2,3,4,5];
const sum = arr1.reduce((total,item)=>{
    return total + item;
},2);
console.log(sum);