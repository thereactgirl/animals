import React, { Component } from 'react';
import BucketList from "./components/BucketList";
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
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is my Bucket List. </h1>  
          <BucketList />
        </header>

      </div>
    );  
  } 
}
export default App;
