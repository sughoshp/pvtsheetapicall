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
      <p>For This App to work you need to set your sheetID in SHEET_ID(which is in "Sheet" function) and give access to the email through which you want to access the data.</p>
      <p>Also to this App to run the user has to get his email added as a test user which can only be done by me. So please send your email Id</p>
      <div className="exshow">
        <h2>Login and Continue</h2>
      </div>
      <div className="actualbody">
        <Body></Body>
      </div>
    </div>
  </>
  );
}

export default App;
