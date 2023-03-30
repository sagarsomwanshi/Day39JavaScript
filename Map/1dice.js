function rollDie(){
    let map = new Map();
    let MAX_COUNT = 10;
    let oneCount = 0,twoCount = 0,threeCount = 0,fourCount = 0,fiveCount = 0,sixCount = 0;

    let check = 0;
    while(check === 0){
        let diceNumber = Math.floor(Math.random() * 6 + 1);
        switch (diceNumber) {
            case 1:
                if(check === 0){
                    oneCount += 1;
                    if(oneCount === MAX_COUNT){
                        check = 1;
                    }
                }
                break;
            case 2:
                if(check === 0){
                    twoCount += 1;
                    if(twoCount === MAX_COUNT){
                        check = 1;
                    }
                }
                break;
            case 3:
                if(check === 0){
                    threeCount += 1;
                    if(threeCount === MAX_COUNT){
                        check = 1;
                    }
                }
                break;
            case 4:
                if(check === 0){
                    fourCount += 1;
                    if(fourCount === MAX_COUNT){
                        check = 1;
                    }
                }
                break;
            case 5:
                if(check === 0){
                    fiveCount += 1;
                    if(fiveCount === MAX_COUNT){
                        check = 1;
                    }
                }
                break;
            case 6:
                if(check === 0){
                    sixCount += 1;
                    if(sixCount === MAX_COUNT){
                        check = 1;
                    }
                }
                break;
            default:
                console.log("Reached Max Count ...");
                break;
        }
    }
   map.set(1,oneCount);
   map.set(2,twoCount);
   map.set(3,threeCount);
   map.set(4,fourCount);
   map.set(5,fiveCount);
   map.set(6,sixCount);
   console.log(map);

   max = 0;
   maxKey = null;
   minKey = null;
   min = 10;
   map.forEach(function(value,key){
       if(max < value){
           maxKey = key;
           max = value;
       }
       if(min > value){
           minKey = key;
           min = value;
       }
   })
   console.log("Dice Number which repeated maximum times is : "+maxKey);
   console.log("Dice Number which repeated minimum times is : "+minKey);
}
rollDie();