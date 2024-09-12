const customerOrder = prompt(
    "Please enter your order, separating each flavor with a comma",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const order = customerOrder.split(",");

console.log(order);

{
    const van = "vanilla";
    let countVan = 0;
    for (flavor of order){
        if (flavor === van){
            countVan ++;
            
        }
        
    };
console.log (`${countVan} order(s) of ${van}`);
}

{
    const straw = "strawberry";
    let countStraw = 0;
    for (flavor of order){
        if (flavor === straw){
            countStraw ++;
            
        }
        
    };
console.log (`${countStraw} order(s) of ${straw}`);
}

{
    const cof = "coffee";
    let countCof = 0;
    for (flavor of order){
        if (flavor === cof){
            countCof ++;
            
        }
        
    };
console.log (`${countCof} order(s) of ${cof}`);
}