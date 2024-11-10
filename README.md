# Employee Management App (Frontend - React + Vite)

This is the frontend application for the Employee Management System built using **React.js** and **Vite**. It serves as the user interface to manage employee data, including adding, updating, deleting, and viewing employee records. The frontend connects to the backend, which is powered by **Node.js** and stores data in **Firebase**.

## Objective

The primary goal of this project is to deploy the **React.js frontend** using **Render**. This app is designed to be deployed as a static site, with the React frontend running on **Vite** to ensure a fast and efficient build process.

### Key Features

- **Add New Employee**: Form to input employee details.
- **View All Employees**: List of all employees with their details.
- **Update Employee**: Modify an existing employee's details.
- **Delete Employee**: Remove an employee from the system.
- **Search Employees by ID**: A feature to find an employee by their ID.
- **Firebase Integration**: Data is saved and retrieved from Firebase Firestore, with photo storage in Firebase Storage.

## Setup Instructions

### 1. **Clone the Repository**
    ```bash
    git clone https://github.com/DeLightPlus/NodeJS-Lesson-8-Deploy-Employee-App.git
    cd employee-app
### 2. **Frontend Setup (React + Vite)**
  - Install dependencies:
       ```bash
       npm install
  - Run the development server locally to ensure everything works:
       ```bash
       npm run dev       
  This will start the React app locally at http://localhost:5173 (default).

### 3. **Deploying to Render**
  * Create a New Web Service on Render
    1. Sign Up or Log In to your Render account at Render.com.
    2. In the Render dashboard, click New > Web Service.
    3. Choose Connect with GitHub and select your repository (make sure it’s a public or private GitHub repository containing your React project).
    4. Once connected, choose the branch you want to deploy (e.g., main or master).
    5. Configure the deployment settings as follows:
       - **Build Command:**
           ```bash
           npm run build
       - **Start Command:**
           ```bash
           npm run preview
       - **Publish Directory:**
          You can leave the Publish Directory empty, as Render will automatically use the dist directory (which Vite generates after building the app) to serve the static files.

  * **Deploy the App**
    **Create Web Service** to deploy your app. Render will:
    - Clone the repository.
    - Install the dependencies.
    - Build the project with > npm run build.
    - Serve the production build with > npm run preview.
  After the deployment process is complete, Render will provide a live URL for your app (e.g., https://your-app-name.onrender.com)
[ https://nodejs-lesson-8-deploy-employee-app.onrender.com/ ].
    
### 4. **Live Preview**

You can view the live, deployed version of the app here:

[**Live Preview**](https://nodejs-lesson-8-deploy-employee-app.onrender.com/) 

This link will take you to the live version of the app, where you can interact with the features, add, update, delete employees, and explore the user interface.


## Technologies Used
  - **Frontend**: React.js, Vite
  - **Deployment**: Render (for hosting the frontend)
  - **Firebase**: Firestore (for data storage), Firebase Storage (for storing photos)
  - **Other**: GitHub (for version control), npm (for package management)
### License
This project is licensed under the MIT License - see the LICENSE file for details.
  ```yaml
  
---

### Key Updates:

1. **Live Preview Section**:
   - Added a section for **Live Preview** where you provide a clickable link to the live, deployed version of the app on Render.
   - Replace `https://your-app-name.onrender.com` | `https://nodejs-lesson-8-deploy-employee-app.onrender.com` with the actual URL that Render gives you once the deployment is complete.
   
2. **Placement of Live Preview**: 
   - The **Live Preview** section is placed just after the **Deployment Instructions**, so users can easily find the link to the live app after reading about the deployment process.

### Where to Include the Live Preview Section:

- **Position**: After the **Deployment Instructions** (Section 3), just before **Continuous Deployment**. This way, readers can deploy the app first and then directly access the live preview link.
  
This will allow anyone reading your README to quickly access the live app without having to go through the deployment steps themselves.

---

### Next Steps:

- Make sure to replace the `Live Preview` URL with the actual deployed URL from Render.
- Test everything and ensure that the link works correctly.

Let me know if you need any further adjustments or additions! 😊

