let num;
let arr= new Array();
for(let i=0 ;i<10 ; i++ ){
    num=Number(Math.floor((Math.random()*899)+100));
    arr.push(num);
}

console.log(arr);
let newArr= arr.sort();
if(newArr[8] !== newArr[9]){
    console.log("2nd max: "+newArr[8]);
}else{
    console.log("2nd max: "+newArr[7]);
}
if(newArr[1] !== newArr[0]){
    console.log("2nd max: "+newArr[1]);
}else{
    console.log("2nd max: "+newArr[2]);
}

