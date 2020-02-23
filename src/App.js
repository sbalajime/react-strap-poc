import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputGroup, Input } from 'reactstrap';

class App extends Component {

  inputFields = [{ label: 'name' }, { label: 'phone' }, { label: 'address' },{ label: 'country' }];

  sumbitData = () => alert('Data submitted')

  handleEnter = (e, index) => {
    if (index <= (this.inputFields.length - 2)) {
      if (e.key == 'Enter') {
        this[`input${index + 1}`].focus();
      }
    } else {
      this.sumbitData();
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.inputFields.map((field, index) => <InputGroup key={index}>
            <Input 
              placeholder={field.label} 
              innerRef={el => this[`input${index}`] = el} 
              onKeyPress={e => this.handleEnter(e, index)} />
          </InputGroup>)}
        </div>
      </div>
    );
  }

}

export default App;
