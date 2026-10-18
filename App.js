import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from '/src/components/Header';
import Body from '/src/components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router';
import About from '/src/components/About';
import Contact from '/src/components/Contact';
import Error from '/src/components/Error';
import RestaurntMenu from '/src/components/RestaurntMenu';


/**
 * 
 * App layout
 *    Header
 *    Body 
 *    Footer
 */
const AppLayout=()=>{
    return(
        <div className="app">
            <HeaderComponent />
            <Outlet />
        </div>
    )
};


const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
              path:"/",
              element: < Body/>
            },
             {
              path:"/about",
              element: <About />
            },
           {
              path:"/contact",
             element: <Contact />
          },
          {
              path:"/restaurent/:restId",
             element: <RestaurntMenu />
          }
        ],
        errorElement:<Error />
    },
     
]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);


