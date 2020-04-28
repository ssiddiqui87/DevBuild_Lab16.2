interface Mountain {
    name:string;
    height:number;
}

let mountains:Mountain[] = [
    {"name": "Kilimanjaro", "height": 19341},
    {"name": "Everest", "height": 29029},
    {"name": "Denali", "height": 20310}
]
let mountainResult:string = FindNameOfTallestMountain(mountains);
console.log(`Tallest mountain name: ${mountainResult}`);
function FindNameOfTallestMountain(mtn:Mountain[]):string
{
    let tallest:number = 0;
    let tallestName:string = '';
    for(let m of mtn)
    {
        if(m.height > tallest)
        {
            tallest = m.height
            tallestName = m.name;
        }
    }

    return tallestName;
}

// *************************************************************************

interface Product {
    name:string;
    price:number;
}

let products:Product[] = [
    {"name": "Nintendo Switch", "price": 299},
    {"name": "Nintendo Switch Lite", "price": 199},
    {"name": "Microsoft Xbox X", "price": 399},
    {"name": "Sony PS4 Pro", "price": 399}
    
]

function calcAverageProductPrice(prod:Product[]):number
{
    let sum = 0;
    for(let p of prod)
    {
        sum += p.price;
    }
    return sum/prod.length;
}

let productResult:number = calcAverageProductPrice(products);
console.log(`Average price: ${productResult}`);

// *************************************************************************
let prods:Product[] = [
    {"name": "motor", "price": 10.00},
    {"name": "sensor", "price": 12.50},
    {"name": "LED", "price": 1.00}
]

interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [
{"product":prods[0], "quantity":10},
{"product":prods[1], "quantity":4},
{"product":prods[2], "quantity":20}
]

function calcInventoryValue(invItems:InventoryItem[]):number
{
    let value = 0;
    for(let i of invItems)
    {
        value += (i.product.price * i.quantity)
    }
    return value;
}

let inventoryResult:number = calcInventoryValue(inventory);
console.log(`Value of all products: $${inventoryResult}`);