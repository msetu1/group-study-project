import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignments from "../pages/Assignments";
import MyAssignments from "../pages/MyAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments";
import CreateAssignments from "../pages/CreateAssignments";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "assignments",
            element: <Assignments></Assignments>, 
        },
        {
            path: "myAssignment",
            element: <MyAssignments></MyAssignments>, 
        },
        {
            path: "createAssignments",
            element: <CreateAssignments></CreateAssignments>, 
        },
        {
            path: "submittedAssignments",
            element: <SubmittedAssignments></SubmittedAssignments>, 
        },
      ]
    },
    {
        path: "/login",
        element: <Login></Login>,  
    },
    {
        path: "/register",
        element: <Register></Register>,  
    }
  ]);

export default router;