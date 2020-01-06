import React from 'react'
import Form from './Form.jsx'
import List from './List.jsx'
import exampleData from '../.././exampleGroceryData.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: exampleData
    }
    this.addGrocery = this.addGrocery.bind(this);
  }
  addGrocery(grocery) {
    var newList = this.state.groceries.slice();
    newList.push(grocery);
    this.setState({
      groceries: newList
    });
  }
  render() {
    return (
      <div>
        <Form addGrocery={this.addGrocery}/>
        <List groceries={this.state.groceries}/>
     </div>
    )
  }
}

export default App;
