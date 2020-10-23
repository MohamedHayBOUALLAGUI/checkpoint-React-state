import React from 'react';
import './App.css';
import Navbar from './profile/Navbar';
import Adress from './profile/Adress';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-bootstrap';





class App extends React.Component {
  constructor(props){
super(props);
this.state={
  Person:{
    fullName:"Mohamed Haythem BOUALLAGUI" ,
    bio:"A mechanical engineer graduated from The Higher National Engineering School of Tunis in 2015. Recently, I made a decision to jumpstart my professional career into web development. So, since 31 August 2020, I have started a training in the desired field within Go My Code.My goal is to acquire new skills in order to give a new direction to my professional career by entering to the world of computer science as a fullstack web developer. Learn and invest my knowledge in a company to contribute to its evolution by sharing my skills and know-how." ,
    imgSrc:"/myPhoto.jpg",
    profession:"Mechanical engineer" 
  },toggle:false,
  count:0
}
  }
handleClick=()=>{
  this.setState({toggle:!this.state.toggle})
}
componentDidMount(){
setInterval(()=>{
  this.setState({count:this.state.count+1})

},1000);
  
}



render(){
  
  
    return (this.state.toggle? 
  
     
    
    <div>
      <Navbar />
      <div  style={{textAlign:'center',marginTop:'4%'}}>
      <Button variant="warning"  onClick={this.handleClick}>Hide This account</Button>
    <p className='mounted'>The component has mounted since <span style={{color:'red'}}>{this.state.count} milliseconds</span></p>
      </div>

      <div style={{margin:'3% 10% 4% 10%',lineHeight:'1.5',padding:'2%',background:'#282c34',boxShadow: '3px 3px 5px #00000063',borderRadius:'20px'}}>
    <p style={{color:'yellow',fontSize:'larger'}}> <span style={{  color:'red',fontWeight: 'bold',fontSize:'larger'}}>Full name:</span>  {this.state.Person.fullName}</p>
    <p style={{color:'yellow',fontSize:'larger'}}><span style={{  color:'red',fontWeight: 'bold',fontSize:'larger'}}>Profession:</span> {this.state.Person.profession}</p>
    <p style={{color:'yellow',fontSize:'larger'}}><span style={{  color:'red',fontWeight: 'bold',fontSize:'larger'}}>Bio:</span> {this.state.Person.bio}</p>
    </div>
      
      <div style={{display:'flex'}}>
     <img src={this.state.Person.imgSrc} alt="myImage" style={{border: '2px solid rgb(158, 145, 194)',
       borderRadius: '50%',
       boxShadow: '-3px 3px 5px rgb(120, 98, 150), -7px 7px 5px rgb(223, 207, 243)',
       marginLeft:'10%', marginBottom:'3%', width:'25%',height:'40%'}} />
       <Adress />
       </div>
      
     
       </div>: <div className='hideProf'><div  style={{textAlign:'center',marginTop:'4%'}}>
      <Button variant="secondary"  onClick={this.handleClick}>Show This account</Button>
      <p className='mounted'>The component has mounted since <span style={{color:'red'}}>{this.state.count} milliseconds</span></p>
      </div>
      <img src="/smiley.jpg" alt='smiley' style={{margin:'2% 10% auto 10%', height:'50%px',width:'80%',textAlign:'center'}} />
      </div>);
   
   

    };
  }
   

    export default App;
