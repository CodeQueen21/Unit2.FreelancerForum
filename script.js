const names = ['Alice', 'Bob'];
const Occupations = ['Writer', 'Teacher'];
const stPrice = [30, 50];
let index = 2;

const moreNames = ['Carol', 'Jim', 'Daniel', 'Sarah', 'Emily'];
const moreOccupations = ['Programer', 'Programmer', 'Artist', 'Musicion', 'cook'];
const morePrices = [85, 60, 35, 60, 28];

const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "teacher",
        price: 50,
    },
];

const extraFreelancers = [
    {
        name: "Carol",
        occupation: "programmer",
        price: 70,
    },
    {
        name: "Abbie",
        occupation: "programmer",
        price: 70,
    },
    {
        name: "Lo",
        occupation: "programmer",
        price: 70,
    },
]

function priceDisplay() {
    const sentence = document.querySelector('p');
    const sum = freelancers.reduce((acc, item) => {
        acc = acc + item.price;
        return acc
    }, 0);
   let text = `The average starting price is $${sum}`;
   sentence.appendChild(document.createTextNode(text));
   
}

function render(arr) {
    for(const key of Object.keys(arr)) {
        
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
        itemTwo.appendChild(document.createTextNode(textTwo));
        price.appendChild(itemTwo);
 }
    priceDisplay();
}

render(freelancers);

function getNames(arr) {
    const names= [];
    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].name);
    }
    return names

}

function nameTimer(arr) {
        const loop = setInterval(() => { 
            if (index === arr.length - 1) { 
                clearInterval(loop) 
            } 
            const list = document.getElementById('name');
            let text = arr[index++];
            const item = document.createElement('li')
            item.appendChild(document.createTextNode(text));
            list.appendChild(item);
        }, 3000);
 }
  nameTimer(moreNames)



