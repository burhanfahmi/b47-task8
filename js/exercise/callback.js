function hello(){
    console.log("Hello world!!");
}
function goodBye(){
    console.log("Goodbye World");
}
function goodBad(){
    console.log("Goodbad World");
}
function print(callback){
    callback();
}
print(hello);
print(goodBye);
print(goodBad);