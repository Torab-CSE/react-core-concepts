import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const player=['lukaku','maria','zidane'];
  const products=[
    {name:"photoshop",price:"$50"},
    {name:"Illustrator",price:"$60"},
    {name:"Excel",price:"$80"}
  ];
  const ingredients=['onion','carrot','cucumber','banana','orange'];

  const friends=[
    {name:'mayeen',job:'automation Eng.'},
    {name:'nayeem',job:'MIS'},
    {name:'touhid',job:'Developer'}
  
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>done</code> and save to reload.
        </p>
        <UsersData></UsersData>
        <Counter></Counter>
        <ul>
          {
            ingredients.map(ingredient=><li>{ingredient}</li>)
          }
        </ul>
        {
          friends.map(fd=><Info friend={fd}></Info>)
        }
        {
          products.map(pd=><Item product={pd}></Item>)
        }
        <Hero name={player[0]} country="France"></Hero>
        <Hero name={player[1]} country="Portugal"></Hero>
        <Hero name={player[2]} country="Argentina"></Hero>
      </header>
    </div>
  );
}
//5. ***Main:USE EFFECT:The useEffect Hook allows you to perform side effects in your components. 
//Some examples of side effects are: fetching data, directly updating the DOM, and timers.

function UsersData(){
  const [users, setUsers]=useState([])     //[stateName,stateValue]=useState()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  console.log(users);
  return (
    <div>
      <h3>Users Information:</h3>
      <ul>
        {users.map((user)=><li>{user.name}</li>)}
      </ul>
    </div>)
  }


//4.***Main:Use State or hook:React components has a built-in state object. The state object is where you store property values that belongs to the component. 
//When the state object changes, the component re-renders.
//4.Using Counter.Note:when you need to change or increment any place by count then use state.
//Declare state : const [name,value]=useState(start count). use anonymous function.

  function Counter(){
    const [count,setCount]=useState(0);  //store data in useState(). 
    return(
      <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>  
        <button onClick={()=>setCount(count-1)}>Decrease</button>
      </div>
    )
  }

//3.****MAIN Note:using props & object destructure,pass dynamic value in component from an array of object where map function is used for loop.
function Info(props){
  const friendStyle={
    backgroundColor:'red',
    height:'200px',
    width:'200px',
    padding:'10px',
    margin:'10px',
    border:'3px solid black',
  }
  console.log(props);
  const {name,job}=props.friend;
  return(
    <div style={friendStyle}>
        <h3>Name:{name}</h3>
        <h4>Job:{job}</h4>
    </div>
  )
}
//2.Note:Create component like function .Function name is starting with capital letter.
//pass dynamic data to in a component.
function Item(props){
  const itemDesign={
    backgroundColor:'orange',
    height:'250px',
    width:'200px',
    padding:'10px',
    margin:'20px',
    border:'2px solid black',
    float:'left'
  }
  console.log(props);
    //read props{product={pd}={name:'',price''}}
    const {name,price}=props.product;   //object destruction

    return(
      <div style={itemDesign} >
        <h3>{name}</h3>
        <h1>{price}</h1>
        <button>Buy</button>
      </div>
    )
}

////1.Note:component name is starting with capital letter & props is parameter .
function Hero (props){        
    const heroStyle={
      backgroundColor:"white",
      color:"black",
      border:"1px solid black",
      padding:"10px",
      margin:"10px"
    };
    return(
      <div style={heroStyle}>
        <h3>name:{props.name}</h3>
        <h5>country: {props.country}</h5>
      </div>
    )
}




export default App;
