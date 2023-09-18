# Budget-My-Vacay


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p>
<img src="https://img.shields.io/badge/-JavaScript-yellow" />
<img src ="https://img.shields.io/badge/-Express-red" />
<img src ="https://img.shields.io/badge/-Sequelize-blue" />
<img src ="https://img.shields.io/badge/-Heroku-purple" />
<img src="https://img.shields.io/badge/-Node-green" />
<img src="https://img.shields.io/badge/-Animate.CSS-orange" />
<img src="https://img.shields.io/badge/-Bootstrap-pink" />
<img src="https://img.shields.io/badge/-Express Handlebars-gold" />
<img src="https://img.shields.io/badge/-MySQL-magenta" />
</p>


## Desctiption

Budget My Vacay was created to relieve stress and help users plan when traveling. This application allows the user to organize, plan, and budget their vacation with ease. The development of this app has helped us become more familiar and experienced with creating a full stack application utilizing routes, databases, handlebars, and javascript to make an elaborate and interactive application.

## Table of Contents 

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

## Installation

`npm i`

## Usage

When the user first runs/opens the application, they will be greeted with the homepage of the of Budget My Vacay. From there the user will have to signup or login. After logging in, the user will be redirected to the profile page where they can view their previous vacations or start a new one. When starting a new one they are asked to input the name, budget, how many days, cost of airfare, and cost of hotel stay. After inputting all the information they will be redirected to their new trip page displaying the name, spending money, a button to add new activities, and a table displaying the amount of days they are traveling. The spending cash is the initial budget minus the airfare and hotel expense. Whenever the new activity button is clicked they are asked to input the activity name, day they are doing on, the time they are doing it, and the cost. A new button connected to a modal with that activities information is created under the day they put the activity under. The cost of the activity is then subtracted from the spending cash.

## Credits

Nick Bicknell
Joshua James
Mandy Douglas

## License

Please refer to the LICENSE in the repo.

## User Story

```
AS a frequent traveller,
I WANT to be able to efficently plan out my trip expenses
SO THAT my trip will be organized and less stressful
```

## Acceptance Criteria

```
GIVEN that the user visits the Budget My Vacay application
WHEN the user lands on the homepage
THEN they are met with the title of the app, a button to start planning their trip, and a login and signup button
WHEN the user clicks login
THEN they are met with a page to login
WHEN the user clicks signup
THEN they are met with a page to signup
WHEN the user clicks plan my trip
THEN they are prompted to login if they aren't already, if they are they are redirected to their trip list page
WHEN the user arrives at the trip list page
THEN they can view previous created trips or create a new trip
WHEN the user selects a previously created trip
THEN they are directed to that trips budget planner
WHEN the user selects a new trip
THEN they are prompted to input their overall budget, travel expenses, hotel/living expenses, and how many days they are staying
WHEN the user submits their expenses 
THEN a new page with their trips budget planner is generated
WHEN the budget planner is first generated
THEN a table including each day, meals, and activities is shown with their available spending money 
WHEN the user wants to add to the table
THEN they can input the name of activity and the cost, the cost of that activity is then subtracted from their available spending money
WHEN the user goes over the available spending money
THEN they are prompted that they are over budget
WHEN the user wants to increase their budget
THEN they are asked how much money they are increasing it by, that amount is then added to their available spending money
WHEN the user wants to add or subract days from their trip
THEN the table is adjusted accordingly
WHEN the user finishes inputing all their expenses 
THEN they can edit or delete their planner
```

## Screenshots

![Budget My Vacay](./images/budget-my-vacay.png?raw=true)

## Link to App

[Budget-My-Vacay-Link](https://)