import React, { Component } from "react";
import { BrowserRouter as Router,Routes, Route, Link }
from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "./AddBook"
import BookUpDateForm from "./BookUpdate"
import FncDisplayBooks from"./DsplyBk_fncCompt"
import DeleteBook from "./Delete_Book";

export default class App extends Component {
render() {
return (
<Router>
<div className="container">
<center><h2> On- Line Book Library using
React </h2> </center>
<br/>
<nav className="navbar navbar-expand-lg
navbar-light bg-success">
<Link to="/" className="navbarbrand"><h4>Add a Book</h4></Link>
<Link to="/DisplayBooksF1"
className="navbar-brand"><h4>Display All books</h4>
</Link>
</nav>
<br/>
<Routes>
<Route path="/" element={<BookForm/>} />
<Route path="/edit/:id"
element={<BookUpDateForm/>} />
<Route path="/Delete/:id"
element={<DeleteBook/>} />
<Route path="/DisplayBooksF1"
element={<FncDisplayBooks/>} />
</Routes>
</div>
</Router>
);}}