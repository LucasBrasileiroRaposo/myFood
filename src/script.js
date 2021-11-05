let drink = false;
let food = false;
let dessert = false;
let value_dessert = 0;
let value_food = 0;
let value_drink = 0;
let total_value_bill = 0;


function selectFood(position,price) {
    const foods = document.querySelectorAll('.food');
    const item = document.getElementById("f"+position);
    
    if (!food){
        item.classList.add("selected");
        value_food = price;
        food = true;
    }else{
        foods.forEach(e =>{
            e.classList.remove("selected");
        });
        item.classList.add("selected");
        value_food = price;
    }

    total_value();
}
function selectDrink(position,price) {
    const drinks = document.querySelectorAll('.drink');
    const item = document.getElementById("d"+position);
    
    if (!drink){
        item.classList.add("selected");
        value_drink = price;
        drink = true;
    }else{
        drinks.forEach(e =>{
            e.classList.remove("selected");
        });
        item.classList.add("selected");
        value_drink = price;
    }

    total_value();
}
function selectDessert(position,price) {
    const desserts = document.querySelectorAll('.dessert');
    const item = document.getElementById("s"+position);
    
    if (!dessert){
        item.classList.add("selected");
        value_dessert = price;
        dessert = true;
    }else{
        desserts.forEach(e =>{
            e.classList.remove("selected");
        });
        item.classList.add("selected");
        value_dessert = price;
    }

    total_value();
}
function total_value(){
    total_value_bill = value_drink + value_food + value_dessert;
    const bill = document.querySelector(".total_value");
    bill.innerHTML = `Valor Total: R$ ${total_value_bill.toFixed(2)}`;
}