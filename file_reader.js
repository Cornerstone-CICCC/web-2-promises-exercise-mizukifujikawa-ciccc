const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstName = '';
let lastName = '';
let age = 0;

fs.readFile('./firstname.txt', 'utf-8')
    .then(data => {
        firstName = data;
        return fs.readFile('./lastname.txt', 'utf-8')
    })
    .then(data => {
        lastName = data;
        return fs.readFile('./age.txt', 'utf-8')
    })
    .then(data => {
        age = data;
        return fs.readFile('./hobbies.txt', 'utf-8')
    })
    .then(data => {
        const hobbies = JSON.parse(data.toString()).join(" and ");
        console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies}`);
    })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function loggingByAsync() {
    let firstName = await fs.readFile("./firstname.txt", "utf-8");
    let lastName = await fs.readFile("./lastname.txt", "utf-8");
    let age = await fs.readFile("./age.txt", "utf-8");
    let hobbies = JSON.parse(await fs.readFile("./hobbies.txt", "utf-8")).join(" and ");

    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies}`);
}

loggingByAsync();