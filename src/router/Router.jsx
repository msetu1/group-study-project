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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader:()=>fetch('http://localhost:5000/feature') 
        },
        {
            path: "assignments",
            element: <Assignments></Assignments>, 
        },
        
        {
            path: "myAssignment",
            element: <PrivateProvider>
              <MyAssignment></MyAssignment>
            </PrivateProvider>, 
        },
        {
            path: "createAssignments",
            element: <PrivateProvider>
              <CreateAssignments></CreateAssignments>
            </PrivateProvider>, 
        },
        {
            path: "submitted",
            element: <PrivateProvider>
              <Submited></Submited>
            </PrivateProvider>, 
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