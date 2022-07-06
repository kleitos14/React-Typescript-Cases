import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
import { Button } from './components/Button';
import { Counter } from './components/class/Counter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import { Text } from './components/polymorphic/Text';
import { RandomNumber } from './components/restriction/RandomNumber';
import { LoggedIn } from './components/state/LoggedIn';
import { Toast } from './components/templateLiterals/Toast';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name="kokos" isLogedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Leonardo Dicaprio
        </Heading>
      </Oscar> */}

      {/* <Button handleClick={(event, id) => {
        console.log("button clicked", event, id)
      }} />

      <Input value="" handleChange={event => console.log(event)} /> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* <LoggedIn /> */}


      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <Counter message="The Count Value is" /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />


      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}


      {/* <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          }
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumber value={10} isPositive={true} /> */}

      {/* <Toast position='center' /> */}

      {/* <CustomButton variant='primary' onClick={() => console.log("hiiii")} >
        Primary Button
      </CustomButton> */}

      <Text as='h1' size='lg'>Heacing</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>

    </div>
  );
}

export default App;
