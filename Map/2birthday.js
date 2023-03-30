function birthMonth(){
    let janCount = 0,febCount = 0,marchCount = 0,aprilCount = 0,mayCount = 0,juneCount = 0,julyCount = 0,augustCount = 0,
        septCount = 0,octCount = 0,novCount = 0,decCount = 0;
    for(let i =0; i<50;i++){
        let randomBirthMonth = Math.floor(Math.random() * 12 + 1);
        switch (randomBirthMonth) {
            case 1:
                janCount++;
                break;
            case 2:
                febCount++;
                break;
            case 3:
                marchCount++;
                break;
            case 4:
                aprilCount++;
                break;
            case 5:
                mayCount++;
                break;
            case 6:
                juneCount++;
                break;
            case 7:
                julyCount++;
                break;
            case 8:
                augustCount++;
                break;
            case 9:
                septCount++;
                break;
            case 10:
                octCount++;
                break;
            case 11:
                novCount++;
                break;
            case 12:
                decCount++;
                break;
            default:
                break;
        }
    
    }
    let mapOfBirthDayMonths = new Map();
    mapOfBirthDayMonths.set(1,janCount);
    mapOfBirthDayMonths.set(2,febCount);
    mapOfBirthDayMonths.set(3,marchCount);
    mapOfBirthDayMonths.set(4,aprilCount);
    mapOfBirthDayMonths.set(5,mayCount);
    mapOfBirthDayMonths.set(6,juneCount);
    mapOfBirthDayMonths.set(7,julyCount);
    mapOfBirthDayMonths.set(8,augustCount);
    mapOfBirthDayMonths.set(9,septCount);
    mapOfBirthDayMonths.set(10,octCount);
    mapOfBirthDayMonths.set(11,novCount);
    mapOfBirthDayMonths.set(12,decCount);

    console.log(mapOfBirthDayMonths);
}
birthMonth();