import React, { useLayoutEffect } from 'react';

let u=[
    {
        id:1,
        email:"abc@gmail.com",

    },{
        id:2,
        email:"xyz@gmail.com"
    }
]

let qstyle={
    color:'pink',
    textAlign:'center'
}

const Contact=()=>{

    return(<>
    <h1 style={{'textAlign':'center'}}>Contact Page</h1>
    <p style={ qstyle}>qwert lkasfmlsakfm alksffffffffffff akslfffffff asklfffffffffff</p>
    
    
     {
     
      u.map((arg1,arg2)=>{
          return(<ul key={arg2}>
                
          <li>{arg1.id}</li>
          <li>{arg1.email}</li>


          </ul>)
      })


     }

    





    </>)

    


}

export default Contact;