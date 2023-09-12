# Budget-My-Vacay

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