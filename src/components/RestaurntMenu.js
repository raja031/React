import {useParams} from 'react-router';
import {useState,useEffect} from 'react';

const RestaurntMenu=()=>{

    const data=useParams();
    console.log(data);
 
     useEffect(()=>{
       fetchMenu();
     },[]);


     const fetchMenu= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=7408&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const json=await data.json();
             console.log(json);
     };
     
    return(
        <div>
            <h1>Restaurent Menu</h1>
        </div>
    );
}

export default RestaurntMenu;