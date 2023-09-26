// global variables
const trip_id = document.querySelector('#trip_id')?.value;
const table = document.querySelector('#dayRows');
const modals = document.querySelector('#modals');
let rowDays;

// creates a new trip based on user input from newVacay and uploads it to the database
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

// creates a new activity and uploads it to the database
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
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
            alert(response.statusText);
        }
        console.log(rowDays);
        rowDays.activities.push(result);
        generateDays();
        location.reload();
    }
};

document
    .querySelector('.new-activity-form')
    ?.addEventListener('submit', newActivityHandler);


// on currentVacay page load make a fetch request for all the data on that trip
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
    })
    .catch( function (err) {
        console.error(err);

    });

// generates rows of days based on how many days user inputted for the trip 
function generateDays() {
    console.log('DATA: ', rowDays);
    
    table.innerHTML = '';
    for (let i = 0; i < rowDays.days; i++) {
        const row = `
     <div class='row border-bottom py-3'>
         <div class='col-1 border-end'>
             <h1 class='fs-4'>Day ${i + 1}</h1>
         </div>
         <div class="col-1"></div>
         <div class='col-9 modals'>
        ${generateActivities(i + 1)}
         

         </div>
     </div>`;
        table.innerHTML += row;
    }
}

// generates activities as a button and adds it to the selected days row
function generateActivities(day) {
    let modals = '';
    console.log(rowDays.activities);
    if (!rowDays.activities) {
        return '';
    }
    for (let i = 0; i < rowDays.activities.length; i++) {
    const activity = rowDays.activities[i]
    console.log('activity ', activity);
    if (activity.day == day) {
    const modal = `<button
        class='text-white link-underline-primary button btn btn-primary mb-4'
        data-bs-toggle='modal'
        data-bs-target='#acModal${activity.id}'
        id='new-activity-btn'
        >${activity.name}</button>
        
        <div
        class='modal fade'
        id='acModal${activity.id}'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
            <div class='modal-content'>
                <div class='modal-header'>
                    <h5 class='modal-title fs-3'>${activity.name}</h5>
                    <button
                    type='button'
                    class='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'></button>
         </div>
         <div class='modal-body'>
           <form class='form new-activity-form'>
             <div class='form-group col-8 mb-2'>
               <label class="fs-4 mb-2">Day ${activity.day}</label>
             </div>
             <div class='form-group col-8 mb-2'>
               <label class="fs-4 mb-2">Time: ${activity.time}</label>
             </div>
             <div class='form-group col-8 mb-2'>
               <label class="fs-4 mb-2">Cost: $${activity.cost}</label>
             </div>
             <button
               type='close'
               data-bs-dismiss='modal'
               class='btn btn-secondary'
             >Close</button>
           </form>
         </div>
       </div>
     </div>
   </div>`;
   modals += modal;
    }
}
return modals;
}