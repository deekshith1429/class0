import React from 'react';


let emp={
    id:1,
    name:'kumar',
    email:'kumar@gmail.com',
    phno:7896541230
}


[{
    "id": 1,
    "name": "kumar",
    "email": "kumar@gmail.com",
    "location": "INDIA"
  },{
    "id": 2,
    "name": "Veeresh",
    "email": "veeresh@gmail.com",
    "location": "USA"
  },
  {
    "id": 3,
    "name": "Anitha",
    "email": "anitha@gmail.com",
    "location": "INDIA"
  },
  {
    "id": 4,
    "name": "Sidhardh",
    "email": "sidhardh@gmail.com",
    "location": "USA"
  },
  {
    "id": 5,
    "name": "Dhanush",
    "email": "dhanush@gmail.com",
    "location": "INDIA"
  },
  {
    "id": 6,
    "name": "Shasank",
    "email": "shasank@gmail.com",
    "location": "INDIA"
  }]


const Contact=()=>{

    return(<>

        <h1>  Contact Component  </h1>
		
        <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>

        <p> { emp.id } - { emp.name } - { emp.email } - { emp.phno }  </p> 
        




        
        { 
        
            users.map(  (udata,index)=> {
                return(<ul key={index}>
                        <li> { udata.id } </li>
                        <li> { udata.name } </li>
                        <li> { udata.email } </li>
                        <li> { udata.location } </li>
                    </ul>)//return close
                    })//map close

        }
        
        
        </>);

}

export default Contact; 