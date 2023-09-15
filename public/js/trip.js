`<h1 class='fs-2 mb-3'>Spending Money: {{trip_budget}}</h1>
<button type='button' class='btn btn-primary mb-4'><a class='text-white link-underline-primary' id='new-activity-btn'
    href='/'>New Activity</a></button>
<div class='row mb-5'>
  <div class='col-2'>
    <h1 class='fs-4 text-decoration-underline'>Days</h1>
  </div>
  <div class='col-10'>
    <h1 class='fs-4 text-decoration-underline'>Activities</h1>
  </div>
</div>
<div class='row mb-2'>
  <div class='col-2'>
    <h1 class='fs-5'>Day 1</h1>
  </div>
  <div class='col-10'>
    -- Activities will go here --
  </div>
</div>`;

const trip_id = document.querySelector('#trip_id')?.value;
const table = document.querySelector('#dayRows');

const newVacayHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#vacay-name').value.trim();
  const days = document.querySelector('#trip-days').value.trim();
  const budget = document.querySelector('#start-budget').value.trim();
  const airfare = document.querySelector('#airfare').value.trim();
  const hotel = document.querySelector('#hotel').value.trim();

  if (name && days && budget) {
    const response = await fetch('/api/trips', {
      method: 'POST',
      body: JSON.stringify({
        name,
        days: parseInt(days),
        budget: parseInt(budget),
        airfare: parseInt(airfare),
        hotel: parseInt(hotel),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const returnData = await response.json();
    console.log(returnData);
    if (response.ok) {
      document.location.replace(`/trip/${returnData.id}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-vacay-form')
  ?.addEventListener('submit', newVacayHandler);

const newActivityHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#activity-name').value;
  const day = document.querySelector('#activity-day').value;
  const time = document.querySelector('#activity-time').value;
  const cost = document.querySelector('#activity-cost').value;


  if (name && day && time && cost) {
    const response = await fetch('/api/activitiesRoutes', {
      method: 'POST',
      body: JSON.stringify({
        name,
        day,
        time,
        cost,
        trip_id: parseInt(trip_id),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-activity-form')
  ?.addEventListener('submit', newActivityHandler);

// function getTripData () {
//     const url = "http://localhost:3001/trip";
//     const options = {
//       method: "GET",
//     //   headers: {
//     //     "trip_id": `${id}`,
//     //   },
//     };

//     return fetch(url, options);
//   };

// window.onload = function getTripData() {
//     fetch("http://localhost:3001/trip")
//     .then(response => response.json())
//     .then(data => console.log(data))
// };

let rowDays;

window.onload = fetch(`/api/trips/${trip_id}`, {
  method: 'GET',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    rowDays = data;
    generateDays();
  });

function generateDays() {
    console.log("DATA: ", rowDays);

    for(i = 0; i < rowDays.days; i++) {
        const row = `
     <div class='row mb-2'>
         <div class='col-2'>
             <h1 class='fs-5'>Day ${i+1}</h1>
         </div>
         <div class='col-10'>

         </div>
     </div>`
     table.innerHTML+=row;
    }
}

// function updateBudget() {
//     const budget = document.querySelector('#start-budget').value.trim();
//     const airfare = document.querySelector('#airfare').value.trim();
//     const hotel = document.querySelector('#hotel').value.trim();

//     console.log(budget, airfare, hotel);
// }

// window.onload = function generateDays() {
//     const days = document.querySelector('#trip-days');
//     const times = parseInt(days);
//     let table = document.querySelector('#dayRows');
//     console.log("Times: ", times);
//     console.log("Days: ", days);

//     for (let i = 0; i < times; i++) {
//         console.log(i);
//         const appendDays = `
//     <div class='row mb-2'>
//         <div class='col-2'>
//             <h1 class='fs-5'>Day ${times[i]}</h1>
//         </div>
//         <div class='col-10'>

//         </div>
//     </div>`;
//     }
//     // table.appendChild(appendDays);

// };

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// const generateCurrentVacay = async (event) => {
//     event.preventDefault();

//     // const name = document.querySelector('#vacay-name').value.trim();
//     // const days = document.querySelector('#trip-days').value.trim();
//     // const budget = document.querySelector('#start-budget').value.trim();

//     if (name && days && budget) {
//         const response = await fetch('/api/trips', {
//             method: 'GET',
//             body: JSON.stringify({
//                 name,
//                 days: parseInt(days),
//                 budget: parseInt(budget),
//             }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         const returnData = await response.json();
//         console.log(returnData);
//         if (response.ok) {
//             document.location.replace(`/trip/${returnData.id}`);
//         } else {
//             alert(response.statusText);
//         }
//     }
// };
