![Alt text](https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627733/ScreenShorts/logo_ufjtk5.png "logo")

![Alt text](https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627733/ScreenShorts/logobar_hyzzq5.png "logobar")

# FULL STACK DEVELOPMENT 

## Assignment Description
Your task is to create a full-stack web application that allows users to view and interact with a list of users. The mock data for the users can be found at this link [Json Data](https://drive.google.com/file/d/1ibmr3WD7Jw6oLL6O_W390WojCLfCHw-k/view?usp=sharing).
. The application should have the following functionalities:

### Frontend Task:

<details>
    <summary>1.	Display users in cards format with pagination: The users should be displayed in a visually appealing card format. Implement pagination to display 20 users per page.</summary>
    <h3>Task Complited</h3>
    <p>Display users in a card format with pagination, featuring 20 users per page.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/userPagination_azxupp.png" alt="User Pagination" />   
</details>
<details>
    <summary>2.	Search by Name: Users should be able to search for users by their names. As the user types in the search input, the list of displayed users should be dynamically updated to match the search query.</summary>
    <h3>Task Complited</h3>
    <p>The list of users dynamically updates as users type into the search input, narrowing down the displayed results based on both first names and last names.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627731/ScreenShorts/SearchFilter_fst23r.png" alt="Search Filter" />
</details>
<details>
    <summary>3.	Add 3 filters: Implement three filters - Domain, Gender, and Availability. Users should be able to select multiple filters simultaneously, and the displayed user list should be updated accordingly.</summary>
    <h3>Task Complited</h3>
    <p>Successfully implemented three filters—Domain, Gender, and Availability. Users can now seamlessly select multiple filters simultaneously, and the user list dynamically updates to reflect the chosen criteria.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627731/ScreenShorts/MultiFilter_qqi7ks.png" alt="Multi Filter" />  
</details>
<details>
    <summary>4.	Create a team: Users should be able to create a team by selecting users from the list. Only users with unique domains and availability should be selectable for the team (similar to adding items to a cart in e-commerce websites).</summary>
    <h3>Task Complited</h3>
    <p>The team creation process has been successfully implemented. Users can now create a team by selecting members from the list. The system ensures that only users with unique domains and availability are selectable for the team, providing a seamless experience akin to adding items to a cart on e-commerce websites.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627731/ScreenShorts/CreateTeam_nkeaiv.png" alt="Create Team" />  
</details>
<details>
    <summary>5.	Show team details: Once the team is created, display the details of the team, including the selected users' information.</summary>
    <h3>Task Complited</h3>
    <p>Successfully completed. After creating the team, the system now displays comprehensive details about the team, providing information about the selected users who are part of the team.</p>
    <h4>View All Teams Page</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627733/ScreenShorts/viewAllTeams_cjvh5o.png" alt="View All Teams" />
    <h4>View Team Page</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/TeamViewPage_deu6mp.png" alt="Team View Page" />   
</details>
<details>
    <summary>6.	Make it responsive: Ensure that the application is responsive and displays properly on different screen sizes.</summary>
    <h3>Task Complited</h3>
    <p>The application has been successfully designed to be responsive, ensuring proper and optimal display across various screen sizes.</p>
    <h4>Laptop-L size view</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627733/ScreenShorts/laptop-LSizeView_yo5cqc.png" alt="laptop-L Size View" />
    <h4>Laptop size view</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627733/ScreenShorts/laptopSizeView_ocwi0a.png" alt="laptop Size View" />
    <h4>Tablet size view</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/tablet_awozpo.png" alt="tablet Size View" />
    <h4>Mobile-L size view</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627733/ScreenShorts/Mobile-L_pgd184.png" alt="Mobile-L Size View" />
    <h4>Mobile-M size view</h4>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627734/ScreenShorts/Mobile-M_vcvikp.png" alt="Mobile-M Size View" />   
</details>

### Backend:
#### Create CRUD API: Implement CRUD (Create, Read, Update, Delete) operations for managing the user data.

<details>
    <summary>GET /api/users: Retrieve all users with pagination support.</summary>
    <h3>Task Complited</h3>
    <p>Successfully implemented: GET /api/users endpoint to retrieve all users with built-in pagination support.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/GetUser_q6vwbd.png" alt="GetUser" />   
</details>
<details>
    <summary>GET /api/users/:id: Retrieve a specific user by ID.</summary>
    <h3>Task Complited</h3>
    <p>The retrieval of a specific user by ID through the GET request to "/api/users/:id" has been successfully implemented.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/GetUserById_htb3aa.png" alt="GetUserById" />   
</details>
<details>
    <summary>POST /api/users: Create a new user.</summary>
    <h3>Task Complited</h3>
    <p>The creation of a new user was successfully completed through the POST request to the /api/users endpoint.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/PostUser_mld79t.png" alt="PostUser" />   
</details>
<details>
    <summary>PUT /api/users/:id: Update an existing user.</summary>
    <h3>Task Complited</h3>
    <p>The update operation for an existing user via the PUT request to "/api/users/:id" has been successfully completed.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/UpdateUser_t02squ.png" alt="UpdateUser" />   
</details>
<details>
    <summary>DELETE /api/users/:id: Delete a user.</summary>
    <h3>Task Complited</h3>
    <p>The user deletion process via the DELETE /api/users/:id endpoint has been successfully executed.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/DeleteUser_joupsk.png" alt="DeleteUser" />   
</details>


Implement filtering, searching, and pagination on the backend:

##### Implement filtering logic to filter users based on the provided filter criteria (Domain, Gender, and Availability).

- Implement searching logic to search for users by their names.
- Implement pagination logic to retrieve a specific number of users per page.
- Create API endpoints for team-related operations:

<details>
    <summary>POST /api/team: Create a new team by selecting users from the list with unique domains and availability.</summary>
    <h3>Task Complited</h3>
    <p>The creation of a new team through the POST request to /api/team has been successfully executed. Users were selected from the list based on unique domains and availability, ensuring a successful and accurate team composition.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627731/ScreenShorts/CreateTeamPost_iut6kz.png" alt="CreateTeamPost" />   
</details>
<details>
    <summary>GET /api/team/:id: Retrieve the details of a specific team by ID.GET /api/team/:id: Retrieve the details of a specific team by ID.</summary>
    <h3>Task Complited</h3>
    <p>The retrieval of specific team details by ID using the GET /api/team/:id endpoint has been successfully implemented.</p>
    <img src="https://res.cloudinary.com/dn9vn1yuj/image/upload/v1701627732/ScreenShorts/GetTeamDetail_qtcft0.png" alt="GetTeamDetail" />   
</details>

## Tech Stack:
### Frontend:
React.js for the UI components

Redux for state management

For Styling use of libraries such as Tailwind, Material UI or Bootstrap is not restricted.

### Backend:
Node.js and Express.js for the server

MongoDB for the database

Mongoose for object modeling with MongoDB

### Deliverables:

Share the GitHub repository containing the code for both the frontend and backend.

Provide the deployed links for both the frontend and backend. (IMPORTANT)
