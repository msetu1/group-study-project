import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignments from "../pages/Assignments";
import MyAssignments from "../pages/MyAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments";
import CreateAssignments from "../pages/CreateAssignments";
import PrivateProvider from "../providers/PrivateProvider";

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
            element: <PrivateProvider>
                <MyAssignments></MyAssignments>
            </PrivateProvider>, 
        },
        {
            path: "createAssignments",
            element: <PrivateProvider>
                <CreateAssignments></CreateAssignments>
            </PrivateProvider>, 
        },
        {
            path: "submittedAssignments",
            element: <PrivateProvider>
                <SubmittedAssignments></SubmittedAssignments>
            </PrivateProvider>, 
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