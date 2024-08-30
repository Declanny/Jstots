// import PropTypes from "prop-types"


// const Greeting = ({ name }) => { 
//     return <div>Hello, {name}!</div>;
// };

// Greeting.propTypes = {
//   name: PropTypes.any
// }

// export default Greeting;




// Steps to Convert to TypeScript:

// Define the Prop Types:

// Create an interface that specifies the type of each prop the component will receive.
// Type the Functional Component:

// Use React.FC (Functional Component) with the defined interface to ensure that the component expects the correct prop types.
// Optional: Remove PropTypes:

// TypeScript handles type checking at compile time, so you may remove PropTypes.
     


    // Converted  code

    import React from 'react'; 

// Step 1: Define an interface for the props
interface GreetingProps {
  name: string; // The name prop is expected to be a string
}

// Step 2: Type the component using React.FC (Functional Component) with the GreetingProps interface
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

// Step 3: Export the component
export default Greeting;
