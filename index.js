// 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
function countProps(obj) {
    return Object.keys(obj).length;
}

const car = {
    color: 'gray',
    brand: 'Bently',
    model: 'MLS 520'
}

console.log(countProps(car));

// 2

// 3

// 3

// 4
function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
}

const employees = {
    Alice: 1000,
    Bob: 1500,
    Charlie: 2000
};

console.log(findBestEmployee(employees));
console.log(countTotalSalary(employees));


// 4

// 5
function getAllPropValues(arr, prop) {
    const values = [];

    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            values.push(obj[prop]);
        }
    }

    return values;
}

const products = [
    { name: "Laptop", price: 1500, quantity: 4 },
    { name: "Phone", price: 800, quantity: 10 },
    { name: "Tablet", price: 600, quantity: 6 }
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
// 5

// 6
function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return {
                totalPrice: product.price * product.quantity,
                quantity: product.quantity
            };
        }
    }

    return { totalPrice: 0, quantity: 0 };
}


const products = [
    { name: "Laptop", price: 1500, quantity: 4 },
    { name: "Phone", price: 800, quantity: 10 },
    { name: "Tablet", price: 600, quantity: 6 }
];

console.log(calculateTotalPrice(products, "Laptop"));
console.log(calculateTotalPrice(products, "Phone"));
console.log(calculateTotalPrice(products, "Tablet"));
// 6