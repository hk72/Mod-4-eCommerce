import React from 'react';
//import logo from './logo.svg';
import CartList from './components/CartList.js'
import Nav from './components/Nav'
//import data from './components/data.js'
import './App.css';

import {Favorites} from './components/favorites.js'
import {Browse} from './components/Browse.js'
import Login from './components/Login'
export default class App extends React.Component {
     state={
       items:[],
       cart:[],
       total:0
     }

   
  render(){

    return (
<<<<<<< HEAD
      
=======
>>>>>>> f965241cb9d6df56b3480fdb7ccb2ddef9c28fd1
      <div>

        <Nav cart={this.state.cart}/>
        <CartList items={this.state.items}  total={this.state.total} />  
      </div>

<<<<<<< HEAD
    )
=======
     
               

      )
>>>>>>> f965241cb9d6df56b3480fdb7ccb2ddef9c28fd1

  }
  
}


