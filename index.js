// 1
const user = {
    hobby: "FootBall",
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

Object.keys(user).forEach(key => {
    console.log(`${key}: ${user[key]}`);
});

console.log(user)
// 1

// 2
function countProps(obj) {
    return Object.keys(obj).length;
}

const car = {
    color: 'gray',
    brand: 'Bently',
    model: 'MLS 520',
}

const {color, brand, model} = car;

const allProps = countProps(color, brand, model);

console.log(allProps)

// 2

// 3
function findBestEmployee(team) {
    let bestEmployee = "";
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(team)) {
        if (tasks > maxTasks) {
            bestEmployee = name;
            maxTasks = tasks;
        }
    }

    return bestEmployee;
}

const team = {
    John: 25,
    Sarah: 15,
    Mike: 35,
    Emma: 20,
};

const { John, Sarah, Mike, Emma } = team;

console.log(findBestEmployee(team));
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
    Charlie: 2000,
};

const {Alice, Bob, Charlie} = employees;

const theTotalSalary = countTotalSalary(employees);

console.log(theTotalSalary)
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

const things = [
    { name: "Laptop", price: 1500, quantity: 4 },
    { name: "Phone", price: 800, quantity: 10 },
    { name: "Tablet", price: 600, quantity: 6 },
];

const propertyValues = [
    getAllPropValues(things, "name"),
    getAllPropValues(things, "price"),
    getAllPropValues(things, "quantity"),
];

console.log(propertyValues);
// 5

// 6
function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.newName === productName) {
            return {
                totalPrice: product.newPrice * product.quantity,
                quantity: product.quantity
            };
        }
    }

    return { totalPrice: 0, quantity: 0 };
}

const products = [
    { newName: "Laptop", newPrice: 1500, quantity: 4 },
    { newName: "Phone", newPrice: 800, quantity: 10 },
    { newName: "Tablet", newPrice: 600, quantity: 6 },
];

const results = [
    calculateTotalPrice(products, "Laptop"),
    calculateTotalPrice(products, "Phone"),
    calculateTotalPrice(products, "Tablet"),
];

console.log(results);
// 6

// 7

// 7