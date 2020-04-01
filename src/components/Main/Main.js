import React , {Fragment} from "react";
import logo2 from '../../assets/logo2.png'
import './style.css'


const Main = () => {

    return(
        <Fragment>
          <br/>
           <header>
             <div>
               <img src={logo2} className="logo-2"/>
             </div>
           </header>

           <section>
             <h1> El origen de tú música</h1>
             </section>
    
        </Fragment>
    )

}

export default Main;