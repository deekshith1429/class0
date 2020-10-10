import React from 'react';
import udata from './jh.json'
import './css/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSnowman, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



const About=()=>{

    return(<>
    <h1 className="h1"><FontAwesomeIcon className="text-primary" icon={faSnowman} />About<FontAwesomeIcon className="text-danger" icon={faEyeSlash} /></h1>
    
    
    <table className="table table-borderinfo">
        <tbody>
    {
     udata.map((p,u)=>
     {
        return(
            <tr key={u}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.location}</td>
                
            </tr>
        )//return closing
     }//data binding

     )//map closing
     
     }
     </tbody>
    </table>
      
      
      


    

    





    </>);

    


}

export default About;