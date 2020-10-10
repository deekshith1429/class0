import React,{ Fragment } from 'react'
import Contact from './Contact.js'
import About from './About.js'




const dkx=["id","name","email",]


function Home()
{
    return(< >

 <h1 >Home</h1>
       <ul>
    { dkx.map((d,i)=><li key={i}>{i}-{d}</li>)}

       </ul>
       <hr/>
       <Contact/>
       <About/>

        </>
    )
}





export default Home;