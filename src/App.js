import React, { Component } from 'react';
import BucketList from "./components/BucketList";
import Form from "./components/Form";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bucketlist: [
        {
          name: 'Salsa Dance In Puerto Rico',
          id: 122,
          completed: false
        },
        {
          name: 'Sky Diving',
          id: 123,
          completed: false
        },
        {
          name: 'Meet Leslie in person',
          id: 124,
          completed: false
        }
      ]
    }
  }

  addItem =(e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      bucketlist: [...this.state.bucketlist, newItem]
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is my Bucket List React App. </h1>  
        </header>
          <BucketList bucketlist = {this.state.bucketlist}/>
          <Form addItem={this.addItem} />
      </div>
    );  
  } 
}
export default App;
