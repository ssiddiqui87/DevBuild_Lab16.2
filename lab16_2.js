var mountains = [
    { "name": "Kilimanjaro", "height": 19341 },
    { "name": "Everest", "height": 29029 },
    { "name": "Denali", "height": 20310 }
];
var mountainResult = FindNameOfTallestMountain(mountains);
console.log("Tallest mountain name: " + mountainResult);
function FindNameOfTallestMountain(mtn) {
    var tallest = 0;
    var tallestName = '';
    for (var _i = 0, mtn_1 = mtn; _i < mtn_1.length; _i++) {
        var m = mtn_1[_i];
        if (m.height > tallest) {
            tallest = m.height;
            tallestName = m.name;
        }
    }
    return tallestName;
}
var products = [
    { "name": "Nintendo Switch", "price": 299 },
    { "name": "Nintendo Switch Lite", "price": 199 },
    { "name": "Microsoft Xbox X", "price": 399 },
    { "name": "Sony PS4 Pro", "price": 399 }
];
function calcAverageProductPrice(prod) {
    var sum = 0;
    for (var _i = 0, prod_1 = prod; _i < prod_1.length; _i++) {
        var p = prod_1[_i];
        sum += p.price;
    }
    return sum / prod.length;
}
var productResult = calcAverageProductPrice(products);
console.log("Average price: " + productResult);
var prods = [
    { "name": "motor", "price": 10.00 },
    { "name": "sensor", "price": 12.50 },
    { "name": "LED", "price": 1.00 }
];
var inventory = [
    { "product": prods[0], "quantity": 10 },
    { "product": prods[1], "quantity": 4 },
    { "product": prods[2], "quantity": 20 }
];
function calcInventoryValue(invItems) {
    var value = 0;
    for (var _i = 0, invItems_1 = invItems; _i < invItems_1.length; _i++) {
        var i = invItems_1[_i];
        value += (i.product.price * i.quantity);
    }
    return value;
}
var inventoryResult = calcInventoryValue(inventory);
console.log("Value of all products: $" + inventoryResult);
