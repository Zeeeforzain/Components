import "./App.css";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Paragraph from "./Components/Paragraph";
import TextField from "./Components/TextField";

function App() {
  return (
    <div className="App">
      <Button btnName="I'm A Button" 
      backgroundColor="whitesmoke"
      width="150px" 
      height="5vh"
      border="2px solid #4FD1C5"
      margin='20px'
      borderRadius="10px"
      color="#4FD1C5"
      cursor="pointer"
      fontSize="12px"
      fontFamily="Helvetica"
      fontWeight="500"
      />
      <Paragraph 
      paragraphText="This is paragraph component!"
      color="Brown"
      fontSize="50px"
      fontFamily="Helvetica"
      fontWeight="700"
      />
      <Checkbox width="50px" height="30px" margin='20px'/>
      <TextField />
      <TextField 
      type="text"
      placeHolder="Enter your text"
        width="400px"
        height='16vh'
        margin-top='10px'
        border='none'
        padding='3px 10px'
        color='white'
        borderRadius='10px'
        backgroundColor='skyblue'
      />
    </div>
  );
}

export default App;
