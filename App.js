import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from '/src/components/Header';
import Body from '/src/components/Body';


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
            <Body/>
        </div>
    )
};

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);


