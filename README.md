#Assignment- Vertical Fox -- Shubham Pawar ( pawarshubham1295@gmail.com )
----------------------------------------------------------------------------------------------------
Brief: 
Here, we want to implement Flight search functionality. You have a form, where user can input 
and search for the flights. Then user will be able to see the search results, user can refine the 
search using a slider for prices. 
----------------------------------------------------------------------------------------------------
Problem statement: 
■ Create a flight JSON data object for your all flights available to make the search happen. 
■ Take the User input from the search form and perform a search on the flight JSON data 
and display the valid search results in the results section. 
■ There are two tabs for return and one way search form, the return date should be visible 
on basis of the tab selected. 
■ Slider should refine the search results based on the selected price range. 
----------------------------------------------------------------------------------------------------
What are we looking for: 
■ Code structure and organization
■ Simplicity and ease of understanding the code
■ Understanding of JavaScript, HTML, JSON and CSS
■ Creativity in terms of look and feel of the page
----------------------------------------------------------------------------------------------------
To Start :
Step 1 : npm i
Step 2 : npm start
----------------------------------------------------------------------------------------------------
Project Overview:

Step 1: Users can directly change the price range, and flights will be displayed according to the selected price.

Step 2: By default, set to "One way" (If the user clicks on "Return" and then clicks on the "Clear" button, it is set to "One way" by default).

Step 3: If the user clicks on the "Return" tab, an additional field (Return Date) is displayed.

Step 4: When the user directly clicks on the "Search" button, it checks validation for origin, destination, departure date, return date, and optional passengers.

Step 5: If the user fills all fields with data and clicks on the "Clear" button, all fields are emptied.

Step 6: Example: Suppose the user fills all the fields like

Origin: abc
Destination: abc
Departure Date: 11/22/23
If the flight is not available, then a popup shows with the message 'Oops! Flights are not available.'
Step 7: In the Flight Results, the total number of flights for the particular search is displayed.

Step 8: When the user clicks on "Book This Flight," a booked popup shows.and again you trying to booked on same ticket shows flight is already booked.

Step 9: For search results, try this example or choose from jsonData:(For more refer jsonData)

1.Search Condition
Type: Return
Origin: Pune
Destination: Delhi
Departure Date: 01/13/2024 13 Jan 2024
Return Date: 01/15/2024  15 Jan 2024

2.Search Condition
Type: Return
Origin: Delhi
Destination: Pune
Departure Date: 01/05/2024
Return Date: 01/07/2024

3.Search Condition
Type: Return
Origin:BANGALORE 
Destination: Delhi
Departure Date: 02/03/2024
Return Date: 02/05/2024











