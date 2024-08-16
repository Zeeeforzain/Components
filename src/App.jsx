import "./App.css";
import Button from "./Components/Button";
import Checkbox from "./Components/Checkbox";
import Paragraph from "./Components/Paragraph";
import Switch from "./Components/Switch";
import TextField from "./Components/TextField";
function App() {
  return (
    <div className="App">
      <Paragraph/>
      <Paragraph
        paragraphText="This is paragraph component!"
        color="Brown"
        fontSize="20px"
        fontFamily="Helvetica"
        fontWeight="700"
      />
      <Button
      variant='text'
      btnName='text'
      margin='5px'
      />
      <Button
      btnName='Outlined'
      variant='outlined'
      margin='5px'
      color='var(--primary)'
      />
      <Button
      btnName='contained'
      variant='contained'
      backgroundColor="var(--primary)"
      margin='5px'
      />
      <Checkbox/>
      <Checkbox width="50px" height="30px" margin="20px" />
      <TextField />
      <TextField
      type="text"
      placeHolder="Enter your text"
      width="400px"
      height="16vh"
      margin-top="10px"
      border="none"
      padding="3px 10px"
      color="white"
      borderRadius="0px"
      backgroundColor="skyblue"
      />
      <Switch width='36px'
      height='14px' 
       toggleSize='10px'
        toggleColor="white" 
        colorOnTrue="#4FD1C5"
        backgroundColor="grey"
        radius="3px"
        margin='10px'
        />
    </div>
  );
}

export default App;
