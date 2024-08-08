import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <Button btnName="Click Me" 
      backgroundColor="Grey"
      width="150px" 
      height="5vh"
      border="none"
      borderRadius="10px"
      color="Blue"
      cursor="pointer"
      fontSize="15px"
      fontFamily="Helvetica"
      fontWeight="700"
      hoverBackgroudColor='white'
      />
    </div>
  );
}

export default App;
