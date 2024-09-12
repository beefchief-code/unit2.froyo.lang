function froyoOrder(customerOrder) {
    customerOrder = prompt(
    "Please enter your order, separating each flavor with a comma",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);


const order = customerOrder.split(",");

console.log(order);

function totalVan(order){
    const van = "vanilla";
    let countVan = 0;
    for (flavor of order){
        if (flavor === van){
            countVan ++;
            
        }
        
    };
console.log (`${countVan} order(s) of ${van}`);
return countVan;
}

function totalStraw(order){
    const straw = "strawberry";
    let countStraw = 0;
    for (flavor of order){
        if (flavor === straw){
            countStraw ++;
            
        }
        
    };
console.log (`${countStraw} order(s) of ${straw}`);
return countStraw;
}

function totalCof(order){
    const cof = "coffee";
    let countCof = 0;
    for (flavor of order){
        if (flavor === cof){
            countCof ++;
            
        }
        
    };

console.log (`${countCof} order(s) of ${cof}`);
return countCof;
}

const fullOrder = {
    vanilla : totalVan(order),
    strawberry : totalStraw(order),
    coffee : totalCof(order),
}

console.log(fullOrder);
return fullOrder;
}