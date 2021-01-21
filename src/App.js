import React, {Component}  from "react"; 
import './App.css';
import Info from './Info'
class App extends Component {
  constructor(props) {
      // So that this.props is not undefined.
      // Allows child class to inherit
      super(props);
      this.state = {
          persons: [
              {
                  name: "Lovon",
                  number: "(000) 000 0000",
                  dob: "09/04/1998",
                  hobby: "Coding",
              },
              {
                  name: "Tim",
                  number: "(000) 000 0000",
                  dob: "05/04/1998",
                  hobby: "Coding",
              },
              {
                  name: "Jon",
                  number: "(000) 000 0000",
                  dob: "09/04/1999",
                  hobby: "Coding",
              },
          ],
      };
  }
  render() {
      return (
          <>
              {this.state.persons.map((person) => {
                  return (
                      <Info
                          key={person.number}
                          name={person.name}
                          number={person.number}
                          dob={person.dob}
                          hobby={person.hobby}
                      />
                  );
              })}
          </>
      );
  }
}

export default App;
