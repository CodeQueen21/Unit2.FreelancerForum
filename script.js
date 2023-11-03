const names = ['Carol', 'Jim', 'Daniel', 'Sarah', 'Emily', 'Alex'];
const occupations = ['Programer', 'Photographer', 'Model', 'Artist'];
const NAME_LIST = document.getElementById('name');
const JOB_LIST = document.getElementById('occupation');
const PRICE_LIST = document.getElementById('price');
const SENTENCE = document.querySelector('p');

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
];

const sumOfCost = freelancers[0].price + freelancers[1].price;
let averageCost = sumOfCost / freelancers.length;
let text = document.createTextNode(`The average starting price is $${averageCost}`);
SENTENCE.appendChild(text);

function render() {
     NAME_LIST.innerHTML = '';
     JOB_LIST.innerHTML = '';
     PRICE_LIST.innerHTML = '';
     for(const freelancer of freelancers) {
        const nameItem = document.createElement('li')
        nameItem.appendChild(document.createTextNode(freelancer.name));
        NAME_LIST.appendChild(nameItem);
        
       
        const occupationItem = document.createElement('li')
        occupationItem.appendChild(document.createTextNode(freelancer.occupation));
        JOB_LIST.appendChild(occupationItem);

        
        const priceItem = document.createElement('li')
        priceItem.setAttribute('class','listItem')
        priceItem.appendChild(document.createTextNode(`$${freelancer.price}`));
        PRICE_LIST.appendChild(priceItem);
     }
}

render();

function generateFreelancer() {
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomOccupationIndex = Math.floor(Math.random() * occupations.length);
  const randomFreelancerName = names[randomNameIndex];
  const randomFreelancerOccupation = occupations[randomOccupationIndex]
  const randomPrice = Math.floor(Math.random() * 100);
  
  return {
    name: randomFreelancerName,
    occupation: randomFreelancerOccupation,
    price: randomPrice,
  }
}

const loop = setInterval(() => { 
        const newFreelancer = generateFreelancer();
        freelancers.push(newFreelancer);
      render();
}, 3000);

const updateAverageStartingPrice = setInterval(() => { 
    let sum = 0;
    for(const key in freelancers) {
        let freelancer = freelancers[key];
        let freelancerPrice = freelancer.price;
        sum += freelancerPrice;
        let averageCostCalc = sum / freelancers.length
        averageCost = Math.round(averageCostCalc);
        SENTENCE.innerHTML = '';
        text = document.createTextNode(`The average starting price is $${averageCost}`);
        SENTENCE.appendChild(text);
     }
}, 3000);


 


 

 



