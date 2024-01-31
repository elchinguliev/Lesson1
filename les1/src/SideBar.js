import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {  faFile, faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
// import {
//   faCaretDown,

// } from "@fortawesome/free-solid-svg-icons";





// export default function Sidebar() {
//   return (
//       <div style={{ height: '100vh', backgroundColor: '#9681EB' }}>
//           <br></br>

//           <h1 style={{ color: 'white' }}>Bootstrap SideBar</h1>
//           <br></br>
//           <br></br>
//           <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
//               <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '-15px' }} src='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg'></img>
//               Home
//           </p>
//           <br></br>
//           <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
//               <img alt='info' style={{ width: '35px', height: '27px', marginTop: '-6px', marginLeft: '-15px' }} src='/info.png' />
//               About
//           </p>
//           <br></br>
//           <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
//               <img alt='FAQ' style={{ width: '33px', height: '28px', marginTop: '-6px', marginLeft: '-35px' }} src='/faq.png'></img>
//               FAQ
//           </p>
//           <br></br>
//           <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
//               <img alt='Contact' style={{ width: '25px', height: '25px', marginTop: '-4px' }} src='/contact.png'></img>
//               Contact
//           </p>

//       </div>
//   )
// }









export default class SlideBar extends Component {
  style = {
    backgroundColor: "#7386d7",
    color: "white",
    border: "0px",
    width: "23%",
    borderRadius: "0px",
    fontSize: "20px",
    cursor:'pointer',
    textAlign:"left",
    fontWeight:"bold",
    height:"50px",
  };

  style2 = {
    width: "23%",
    backgroundColor: "#6d7fcc",
    textAlign: "left",
    color: "white",
    height: "200px",
  };

  styleIcon={
    paddingRight:"20px"
  }

  render() {
    return (
      <div>
        <div style={this.style2}>
          <h1 style={{ marginLeft: "30px", paddingTop: "40px"}}>Bootstrap</h1>
          <h1 style={{ marginLeft: "30px" }}>Sidebar</h1>
        </div>
          <ListGroupItem style={this.style} id="first">
            Dummy Heading
          </ListGroupItem>
        <ListGroup>
          <ListGroupItem  style={this.style}>Home
          <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '1%' }} src='/homee.png'></img>         
          </ListGroupItem>
            <ListGroupItem  style={this.style}>About
            <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '1%' }} src='/inffffff.png'></img>         
            </ListGroupItem>          
            <ListGroupItem  style={this.style}>Pages
            <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '1%' }} src='/pages.png'></img>         

            </ListGroupItem>       
            <ListGroupItem  style={this.style}>Portfolio
            <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '1%' }} src='/pppo.png'></img>         

            </ListGroupItem>
            <ListGroupItem  style={this.style}>FAQ
            <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '1%' }} src='/fffaaqq.png'></img>         

            </ListGroupItem>
            <ListGroupItem style={this.style}>Contact
            <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '1%' }} src='/conta.png'></img>         

            </ListGroupItem>
        </ListGroup>
        
      </div>
    );
  }
}
