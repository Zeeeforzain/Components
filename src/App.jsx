import "./App.css";
import Button from "./Components/Button";
import Paragraph from "./Components/Paragraph";

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
      />
      <Paragraph 
      paragraphText="This is paragraph component!"
      color="Brown"
      fontSize="50px"
      fontFamily="Helvetica"
      fontWeight="700"
      />
    </div>
  );
}

export default App;
