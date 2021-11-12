// import Component from 'react';
import HornedBeast from './Horned-Beast';

class Main extends HornedBeast {
  render() {
    return (
      <>
        <h1>Main {this.props.message}</h1>
        <HornedBeast title={'Rhino'}/>
      </>
    );
  }
}

export default Main;

