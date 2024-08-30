
import Greeting from './components/Greeting' // Adjust the path based on where Greeting is located
import Counter from './components/Counter';   // Adjust the path based on where Counter is located

// Define the App component
const App = () => {
  return (
    <div>
      {/* Use the Greeting component and pass a name prop */}
      <Greeting name="John" />

      {/* Use the Counter component */}
      <Counter />
    </div>
  );
};

// Export the App component
export default App;
