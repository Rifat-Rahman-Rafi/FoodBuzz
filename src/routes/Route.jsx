import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";



import View_Recipe from "../component/View_Recipe/View_Recipe";
import Login from "../component/Login/Login";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Register from "../component/Register/Register";
import Blog from "../component/Blog/Blog";
import Contact from "../component/Contact/Contact";
import Not_found from "../component/Not_found/Not_found";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Not_found></Not_found>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                
                path: '/recipe/:id',
                element: <PrivateRoute><View_Recipe></View_Recipe></PrivateRoute>,
                loader: ({params})=> fetch(`https://test-assignment-server.vercel.app/recipe/${params.id}`)
                
              },
              
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
  
        ]
    }
])
export default router;