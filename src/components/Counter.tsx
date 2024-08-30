//  Converting Counter Component

// import React, { Component } from 'react'; 
// class Counter extends Component { 
//   state = {
//     count: 0
//   }; 
//   increment = () => {
//     this.setState({ count: this.state.count + 1 }); 
//   }; 
//   render() { 
//     return (
//       <div> 
//         <p>Count: {this.state.count}</p> 
//         <button onClick={this.increment}>Increment</button> 
//       </div>
//     );
//   }
// } 
// export default Counter;
     

// Steps to Convert to TypeScript:

// Define the State Type:

// Create an interface to define the shape of the state. This ensures that the state object is properly typed.
// Type the Component Class:

// Use TypeScript's generic type parameters <Props, State> to specify the types for the component's props and state.
// Ensure Type Safety:

// Make sure that all methods and properties are typed correctly, ensuring the component behaves as expected.


import React, { Component } from 'react';

// Step 1: Define an interface for the state
interface CounterState {
  count: number; // The count state is expected to be a number
}

// Step 2: Define the Counter class component with state typed
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0, // Initialize the state with count set to 0
  };

  // Step 3: Ensure the increment method is typed and updates the state correctly
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 4: Render method with proper typing
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 5: Export the component
export default Counter;

