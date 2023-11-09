import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignments from "../pages/Assignments";
import ReadMore from "../components/page/ReadMore";
import MyAssignment from "../pages/MyAssignment";
import CreateAssignments from "../pages/CreateAssignments";
import Submited from "../pages/Submited";
import PrivateProvider from "../providers/PrivateProvider";
import ViewAssignment from "../components/details/ViewAssignment";
import Update from "../components/update/Update";
import ErrorPage from "../components/page/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader:()=>fetch('http://localhost:5000/feature') 
        },
        {
            path: "assignments",
            element: <Assignments></Assignments>,
            loader:()=>fetch('http://localhost:5000/allasignment')
           
        },
        
        {
            path: "myAssignment",
            element: <PrivateProvider>
              <MyAssignment></MyAssignment>
            </PrivateProvider>, 
            loader:()=>fetch('http://localhost:5000/allasignment')
        },
        {
            path: "view/:id",
            element: <PrivateProvider>
              <ViewAssignment></ViewAssignment>
            </PrivateProvider>,
            loader:({params})=>fetch(`http://localhost:5000/allasignment/${params.id}`) 
        },
        {
            path: "createAssignments",
            element: <PrivateProvider>
              <CreateAssignments></CreateAssignments>
            </PrivateProvider>,
            loader:()=>fetch('http://localhost:5000/allasignment') 
        },
        {
            path: "submitted",
            element: <PrivateProvider>
              <Submited></Submited>
            </PrivateProvider>, 
        },
        {
            path: "update/:id",
            element: <Update></Update>, 
            loader:({params})=>fetch(`http://localhost:5000/allasignment/${params.id}`)
        },
        {
          path: "readMore",
          element: <ReadMore></ReadMore>, 
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