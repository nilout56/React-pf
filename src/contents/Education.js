 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Faculty of Engineering" where=" National University of Laos" from="2024" to="Present" />
                 <Widecard title="Department of Computer Engineering and Information Technology " where="FEN" from="2020" to="2024" />
             </div>
         );
     }
 }
 
 export default Education;