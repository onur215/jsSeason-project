const month = +prompt("bir ay giriniz(1-12):")
const day = +prompt("bir gün giriniz (1-31):")

const selectedMonth =  1 <= month  && month <= 12
const selectedDay =  1 <= day  && day <= 31

if(selectedDay && selectedMonth){
    if((month == 2 && day >= 21) || month == 3 || month == 4 || month == 5){
        console.log(`The season for ${month}/${day} is Spring`); 
    }else if(month == 6 || month == 7 || month == 8 || (month == 9 && day <=21)){
        console.log(`The season for ${month}/${day} is Summer`);
    }else if((month == 9 && day >= 22) || month == 10 || month == 11 || (month == 12 && day <= 20)){
        console.log(`The season for ${month}/${day} is fall`);
    }else if(month == 12 && day >= 21 || month == 1 || month == 2 && day <= 20){
        console.log(`The season forr ${month}/${day} is winter`);
    }
}else{
    console.log("Invalid month or day. Please enter valid valuess.");
}

