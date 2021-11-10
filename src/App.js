import { Component } from 'react';
import './App.css';
import Header from './Header.js'

function App() {
  return (
    <div>
      <Header />
      <Main message={'hello'} />
      <Footer />
    </div>
  );
}





class Main extends Component {
  render() {
    return (
    <>
      <h1>Main {this.props.message}</h1>
      <HornedBeast title={'Rhino'}/>
    </>
    )
  }
}

class HornedBeast extends Component {
  render() {
    return <h1>Gallery of horns {this.props.title}</h1>
  }
}

class Footer extends Component {
  render() {
    return <h1> Footer</h1>
  }
}


export default App;
