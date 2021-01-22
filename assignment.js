// https://github.com/tahmidmahdi/js-assignment

function kilometerToMeter(kmValue){
    if (kmValue < 0){
        return "Distance can not be negative";
    }
    let meter = kmValue * 1000; // converting into meter
    return meter;
}
meterValue = kilometerToMeter(6);
console.log(meterValue);





function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){ // checking if the input has negative value 
        return "Price can not be in negetive state";
    }
    let watchPrice = 50 * watch;
    let phonePrice = 100 * phone;
    let laptopPrice = 500 * laptop;
    return watchPrice+phonePrice+laptopPrice; // added up total price 
}
let total = budgetCalculator(2,2,2);
console.log(total);




function hotelCost(days){
    let price = 0;
    if(days <= 10){
        price = 100 * days;
    }
    else if( days <= 20){
        let priceOfTen = 100 * 10;   // calculating price in between 1 to 10 days
        let daysCount = days - 10;   //days spent from 11 to 20
        let priceOfTwenty = 80 * daysCount; // counting room fare in between days 11 - 20
        price = priceOfTen + priceOfTwenty; // adding up total. it includes price between 1-10 days also 11-20 days
    }
    else{
        let priceOfTen = 100 * 10;       // calculating price in between 1 to 10 days
        let priceOfTwenty = 80 * 10;        // calculating price in between 11 to 20 days
        let daysCount = days - 20;                //days spent from 21 to infinity 
        let priceOfRemaining = daysCount * 50;       // counting room fare in between days 21 - ...
        price = priceOfTen + priceOfTwenty + priceOfRemaining; // adding up prices

    }
    return price;
}

let totalPrice = hotelCost(40);
console.log(totalPrice);





function megaFriend(array){
    let temp = array.length; // defines length of the array 
    if(array == ""){
        return "name can not be empty"
    }
    else{
        for (let i = 1; i < array.length; i++){
            if(i == 0){
                temp = array[i];   // taking input of 0 index 
            }
            else{
                if(temp.length > array[i].length){
                    continue;       // returning, as the value is not bigger 
                }
                else{
                    temp = array[i]; // bigger one stored in temp 
                }
            }
        }
    }
    
    return temp;

}
let name = ['mahdi','rahat','susmoy','wahiduzzaman'];
let getbigName = megaFriend(name);   // storing the return value 
console.log(getbigName);





