import './App.css';
import Body from './components/body/body';
import Header from './components/header/header';

function App() {
  return (<>
    <div className="bigborder"></div>
    <div className="App_header">
      <Header /></div>
    <div className="bigborder"></div>
    <div className="App_body">
      <div className="exshow">
        <h2>Login and Continue</h2>
      </div>
      <div className="actualbody">
        <h2>THis is Body</h2>
        <Body></Body>
      </div>
    </div>
  </>
  );
}

export default App;
