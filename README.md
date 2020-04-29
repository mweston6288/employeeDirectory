# Employee Directory
Purpose: Creates a table of employees that can be sorted based on the table fields. The table can be filtered by name for easier use.

# To use:
You'll need to install dependencies in both the client and server side. In both employeeDirectory/client and employeeDirectory/server, you'll need to run the following command:

npm install

To deploy locally, you'll need to run the client and server side separately. In your terminal, enter employeeDirectory/client and run the command

npm start

This should open your default borwser to localhost:8000

Then change directory to employeeDirectory/server and run the following command

node server.js

By default, the client side runs on port 8000 and the server side runs on port 3000.

# Using the app
When the app loads, it will performa get from an employee database and fill out a table using the information.
The employee table shows the name, email, role, and date of birth of each employee. By default, they are sorted by order they were added. You can click on the table headers to sort by each field.

The search bar will filter employees by name. When you enter a name and click submit, the table will display only names matching your query. If you click submit while the field is blank, it will display all employees.

Clicking add Employee will open a form to add a new employee. If you fill in all the fields and click submit, the new employee will be added to your list.
Note: Clicking submit when any field is blank will close the form without adding any data.

# File structure.
The files are divided into the frontend "client" and backend "server" folders.

Client contains the public and src folders and package.json files.
The frontend is made using React and is built appropriately. Inside client/src are the api and component files.

server contains the database models and routes. Database model is built using mongo.

