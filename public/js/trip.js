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
</div>`

const newVacayHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#vacay-name').value.trim();
    const days = document.querySelector('#trip-days').value.trim();
    const budget = document.querySelector('#start-budget').value.trim();
  
    if (name && days && budget) {
      const response = await fetch('/api/trips', {
        method: 'POST',
        body: JSON.stringify({ name, days: parseInt(days), budget: parseInt(budget) }),
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
  .addEventListener('submit', newVacayHandler);