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

    Object.keys(team).forEach(name => {
        const tasks = team[name];
        if (tasks > maxTasks) {
            bestEmployee = name;
            maxTasks = tasks;
        }
    });

    return bestEmployee;
}

const team = {
    employee1: 25,
    employee2: 15,
    employee3: 35,
    employee4: 20,
};

const {employee1, employee2, employee3, employee4} = team;

console.log(findBestEmployee(team));
// 3

// 4
function countTotalSalary(employees) {
    let totalSalary = 0;

    Object.keys(employees).forEach(key => {
        totalSalary += employees[key];
    });

    return totalSalary;
}

const employees = {
    employee5: 1000,
    employee6: 1500,
    employee7: 2000,
};

const {employee5, employee6, employee7} = employees;

const theTotalSalary = countTotalSalary(employees);

console.log(theTotalSalary);
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
    {name: "Laptop", price: 1500, quantity: 4},
    {name: "Phone", price: 800, quantity: 10},
    {name: "Tablet", price: 600, quantity: 6},
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
    {newName: "Laptop", newPrice: 1500, quantity: 4},
    {newName: "Phone", newPrice: 800, quantity: 10},
    {newName: "Tablet", newPrice: 600, quantity: 6},
];

const results = [
    calculateTotalPrice(products, "Laptop"),
    calculateTotalPrice(products, "Phone"),
    calculateTotalPrice(products, "Tablet"),
];

console.log(results);
// 6

// 7
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
// Закинути гроші на рахунок
// Зняти гроші з рахунку
// Замінити пароль


const account = {
    userName: "Markiian",
    userEmail: "test@email.com.fi",
    userPassword: "jdao&0k",
    userAdress: "GReenStreet R8",
    userPhone: "+380 97 673 4587",
    userBalance: 100,

    // changePassword (),

    // replenishBalance (),

    // withdrawBalance (),
}
// 7