let num;
let arr= new Array();
for(let i=0 ;i<10 ; i++ ){
    num=Math.floor((Math.random()*899)+100);
    arr.push(num);
}
console.log(arr);

let max_pos =0;
let max = arr[max_pos];

for(let i=0 ; i<=10; i++){
    if(arr[max_pos]<arr[i]){
        max= arr[i];
        max_pos=i;
    }
}
arr[max_pos]=-1;
let max_pos2 =0;
max = arr[max_pos2];

for(let i=0 ; i<=10; i++){
    if(arr[max_pos2]<arr[i]){
        max= arr[i];
        max_pos2=i;
    }
}
console.log("2nd Max: "+max);

let min_pos =0;
let min = arr[min_pos];

for(let i=0 ; i<=10; i++){
    if(arr[min_pos]>arr[i]){
        min= arr[i];
        min_pos=i;
    }
}
arr[min_pos]=1000;
let min_pos2 =0;
min = arr[min_pos2];

for(let i=0 ; i<=10; i++){
    if(arr[min_pos2]>arr[i]){
        min= arr[i];
        min_pos2=i;
    }
}

arr[min_pos2]=10000;
let min_pos3 =0;
min = arr[min_pos3];

for(let i=0 ; i<=10; i++){
    if(arr[min_pos3]>arr[i]){
        min= arr[i];
        min_pos3=i;
    }
}

console.log("2nd Min: "+min);
