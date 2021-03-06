import './App.css';
// import Greeting from './components/Greet';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import FuncEvent from './components/FuncEvent';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import PersonList from './components/PersonList';
// import StyleSheets from './components/StyleSheets';
// import Modules from './components/Modules';
// import DemoForm from './components/DemoForm';
// import ParentLifecycle from './components/ParentLifecycle';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import PortalDemo from './components/PortalDemo';
// import Villain from './components/Villain';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import CounterRender from './components/CounterRender'
import GrandParent from './components/GrandParent';
import { UserProvider } from './components/userContext';

const App = () => (
  <div className="App">
    {/* <header className="App-header">
      <DemoForm />
    </header> */}
    {/* <Greeting name='Jhon'>this is greeting of any people</Greeting>  */}
    {/* <Welcome name='Victor'>this is welcoming of somebody</Welcome> */}
    {/* <hr /> */}
    {/* <Counter /> */}
    {/* <hr /> */}
    {/* <FuncEvent /> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}
    {/* <hr /> */}
    {/* <PersonList /> */}
    {/* <hr /> */}
    {/* <StyleSheets /> */}
    {/* <hr /> */}
    {/* <Modules /> */}
    {/* <ParentLifecycle /> */}
    {/* <ParentComp /> */}
    {/* <RefsDemo /> */}
    {/* <FocusInput /> */}
    {/* <PortalDemo /> */}
    {/* <ErrorBoundary>
      <Villain villainName='Jocker' />
      <Villain villainName='Biddler' />
      <Villain villainName='Batman' />
    </ErrorBoundary> */}
    {/* <ClickCounter name='Victor' />
    <HoverCounter /> */}
    {/* <CounterRender render={(count, incrementCount) => (
      <ClickCounter2 count={count} incrementCount={incrementCount} />
    )} />
    <CounterRender render={(count, incrementCount) => (
      <HoverCounter2 count={count} incrementCount={incrementCount} />
    )} /> */}
    <UserProvider value='Habendu'>
      <GrandParent />
    </UserProvider>
  </div>
);

export default App;
