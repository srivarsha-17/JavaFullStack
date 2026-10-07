var a = 25;

for(let i = 2;i<=parseInt(Math.sqrt(a));i++){
    if(a%i == 0){
        console.log("flase");
        return;
    }
}

console.log("true");
