const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50,
    },
    {
        name: "Carol",
        occupation: "Programmer",
        price: 85,
    },
    {
        name: "Jim",
        occupation: "Photogragher",
        price: 60,
    },
    {
        name: "Daniel",
        occupation: "Model",
        price: 35,
    },
    {
        name: "Sarah",
        occupation: "Artist",
        price: 60,
    },
    {
        name: "Emily",
        occupation: "Cook",
        price: 28,
    },
];

function priceDisplay() {
    let averageAmount = document.querySelector('p');
    for(const key of Object.keys(freelancers)) {
        let number = freelancers[key].price;
        let sum = number.price.reduce((accumulator, currentValue) => {
            accumulator + currentValue;
        }, 0);
    }
    let text = `The average starting price is $${sum}.`
    averageAmount.appendChild(document.createTextNode(text));
}

function render(arr) {
    for(const key of Object.keys(arr)) {
        if(key < 2) {
            const names = document.getElementById('name');
        let text = arr[key].name;
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(text));
        names.appendChild(item);
       
        const job = document.getElementById('occupation');
        let textOne = arr[key].occupation;
        const itemOne = document.createElement('li')
        itemOne.appendChild(document.createTextNode(textOne));
        job.appendChild(itemOne);
   
        const price = document.getElementById('price');
        let textTwo = `$${arr[key].price}`;
        const itemTwo = document.createElement('li')
        itemTwo.setAttribute('class','listItem')
        itemTwo.appendChild(document.createTextNode(textTwo));
        price.appendChild(itemTwo);
       }
    } 
      priceDisplay();
}

render(freelancers);

function timer(arr) {
    let index = 2;
    const loop = setInterval(() => { 
        if (index === arr.length - 1) { 
            clearInterval(loop) 
        } 
        
            const names = document.getElementById('name');
            let personName = freelancers[index++];
            let text = personName.name;
            const item = document.createElement('li')
            item.appendChild(document.createTextNode(text));
            names.appendChild(item);
    }, 3000);
}

function timerTwo(arr) {
let index = 2;
const loop = setInterval(() => { 
    if (index === arr.length - 1) { 
        clearInterval(loop) 
    } 
    const jobs = document.getElementById('occupation');
    let personJob = freelancers[index++];
    let textOne = personJob.occupation;
    const itemOne = document.createElement('li')
    itemOne.appendChild(document.createTextNode(textOne));
    jobs.appendChild(itemOne);

}, 3000);
}

function timerThree(arr) {
let index = 2;
const loop = setInterval(() => { 
    if (index === arr.length - 1) { 
        clearInterval(loop) 
    } 
    const prices = document.getElementById('price');
    let personPrice = freelancers[index++];
    let textTwo = `$${personPrice.price}`;
    const itemTwo = document.createElement('li')
    itemTwo.setAttribute('class','listItem')
    itemTwo.appendChild(document.createTextNode(textTwo));
    prices.appendChild(itemTwo);

}, 3000);
}

timer(freelancers);
timerTwo(freelancers);
timerThree(freelancers);


 


 

 



