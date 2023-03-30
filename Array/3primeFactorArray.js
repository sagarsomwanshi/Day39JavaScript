let num = Number(prompt("Enter a number "));
let check = 0;
let arr= new Array();
for(let i =2; i<=num/2; i++){
    if(num%i === 0){
        for(let j=2; j<i; j++){
            if(i%j===0){
                check=1;
            }
        }
        if(check === 0){
            arr.push(i);
        }
        check = 0;
    }
}
console.log("Prime Factors of ",num," : ",arr);