import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Private from "./components/auth/Private";
import CounterClass from "./components/class/CounterClass";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generic/List";
import CustomButton from "./components/html/Button";
import CustomComponent from "./components/html/CustomComponent";
import Text from "./components/polymorphicComponent/Text";
import Demo from "./components/ref/Demo";
import MutableRef from "./components/ref/MutableRef";
import RandomNumber from "./components/restrictingProps/RandomNumber";
import Counter from "./components/state/Counter";
import User from "./components/state/User";
import Toast from "./components/templateliterals/Toast";



function App() {
/*   const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [{
    first:'Bruce',
    last:"Broad"
  },
{
  first : "Wayne",
  last:"Parnel"
},
{
  first:"Clark",
  last:'Root'
}];
 */
  return (
    <div className="App">
     {/*  <Greet name="Krishna" messageCount={20} isLoggedIN={true} />
      <Person name={PersonName} />
      <PersonList names={nameList}/>
      <Status status='success'/>
      <Heading>Text from App.js</Heading>
      <Oscar>
      <Heading>Text from App.js</Heading>
      </Oscar>
      //removed messageCount parameter
       <Greet name="Krishna" isLoggedIN={true} />
      <Button handleClick={(event)=>{
        console.log('Button clicked',event)
      }}/>
      <Input value='' handleChange={e=>console.log(e)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
      <User/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Demo/>
      <MutableRef/>
      <CounterClass message='The count value is'/>
      <Private isLoggedIn={false}/>
      <List  items={['Batman','Superman','Antman']} onClick={(item)=>console.log(item)}/>
      <List  items={[1,2,3]} onClick={(item)=>console.log(item)}/>
      <List items={[
        {
          first:'Bruce',
          last:'Wayne'
        },
        {
          first:'Kent',
          last:'Root'
        },
        {
          first:'Clarke',
          last:'Hayden'
        }
      ]} onClick={(item)=>console.log(item)}/>
      <RandomNumber value={10} isPositive/>
      <Toast position='center-left'/>
      <CustomButton variant='primary'>Primary button</CustomButton>
      <CustomComponent  name="Krishna" isLoggedIN={false}/>*/}
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>



    </div>
  );
}

export default App;
