# formDATAlocal
README file includes: 1 paragraph w/ 3 features (implemented additional 2 features totaling 5) My site is hosted through Github under repository janderson2425/formDATAlocal---> link : https://github.com/janderson2425/formDATAlocal 

My goal for this project was to explore a variety of Javascript features and implement them based on concepts I gravitated towards along the way. The project consists of a form that displays 3 fields of data into a table on the same page (located on 'Customer Form' nav link). On the 'Doughnut Graph' nav link you can find the #5 feature listed below. It's important to note when inputting data into the form it is displayed in local storage. Node.js was used to facilitate the build of this project. Chart.js does not need to be installed to view data visualization due to the the simplicity of the graph and data points. I decided to use the CDN link in my HTML page to implement the Charts.js canvas on my webpage. Media queries are set to accommodate desktop and tablet screen sizes.  
The following features were incorporated into my project:

1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app.
--> I used JSON to facilitate the retrieval of data (GET) and storage of data to local storage and display it on the same page after user submittal.

2. Create a form and save the values (on click of Submit button) to an external file. 
You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted.
--> Values saved on local storage in key/value pairs. You can access the information to local storage by right clicking on the webpage and going to the 'applications' tab at the top of the page. There you will see the array of information.

3. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application.
--> I created an array 'client_responses' (used 'name', 'email, 'message') to populate values and display on web-page in columns and in local storage.

4. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format.
--> I used a regular expression 'pattern' to valid email, in addition to prevent duplicate data from being sent. There is a 'duplicate data' and 'You have enterd an invalid email!' alert set. I also set a 250 maximum character value in the 'message' textarea to prevent too much information from being displayed in the columns.

5. Visualize data in a graph, chart, or other visual representation of data.
--> I used Charts.js library to display a doughnut graph revealing data collected from a fictitious customer survey. Hovering over sections will reveal total number of customers for that field. This aspect of the project was the most interesting for me.

