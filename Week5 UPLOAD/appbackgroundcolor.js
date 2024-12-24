import './App.css';
function AppColor(props) {
 function greetUser(e) {
 document.body.style.background = e.target.value;
 alert("Welcome Mr"+ document.getElementById(props.color).value)
}
 return (
 <body style={{backgroundcolor:'powderblue',color:'black'}}>
 <div className="App">
 <h1>{props.heading} </h1>
 <p style={{color:'blue',font: '30px Arial'}}> How to create function comoponent.</p>
 <label class="label" id="lbl">{props.lbl}</label>
 <input id={props.color} type="text" />
 <button value={props.color} onClick={greetUser} >Colour me {props.color}</button>
</div>
 </body>
 );
}
export default AppColor; 
