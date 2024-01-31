


import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{
                width:"70%",
                marginLeft:"25%",
                position:"absolute",
                 marginTop:"1%"
            }}>

            <nav class="navbar shadow-sm p-3 mb-5 bg-white rounded navbar navbar-expand-md navbar-light bg-light">
               
    
                <button >
                    <img style={{
                        width:"20px",
                        height:"20px"
                    }} src='/line.png'></img>
                </button>
                <div class="collapse show navbar-collapse">
                    <ul style={{display:"flex",marginRight:"10%",justifyContent:"space-between", textAlign:"center" }}>
                        <li style={{marginLeft:"10px%"}} class="nav-item"><a class="nav-link" href="/page-1">page 1</a></li>
                        <li style={{marginLeft:"40px"}}  class="nav-item"><a class="nav-link" href="/page-2">page 2</a></li>
                        <li style={{marginLeft:"40px"}}  class="nav-item"><a class="nav-link" href="/page-3">page 3</a></li>
                        <li style={{marginLeft:"40px"}}   class="nav-item"><a class="nav-link" href="/page-4">page 4</a></li>
                    </ul>
                </div>
            </nav>
            </div>

        )
    }
}