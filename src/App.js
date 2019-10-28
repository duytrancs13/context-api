import React, { Component } from 'react';
import './App.css';

const Green = () => {
  return (
    <div className="green">
      <MyContext.Consumer>
        {context => (
          <div>
            <p> {context.state.number}</p>
            <button onClick={context.countUp}>Click</button>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  )
}

const Blue = (props) => {
  return (
    <div className="blue">
      <Green />
    </div>
  )
}

// eslint-disable-next-line no-undef
class Red extends Component {
  render () {
    return (
      <div className="red">
        <MyContext.Consumer>
          {(context) => context.state.number}
        </MyContext.Consumer >
        <Blue />
      </div>
    )
  }
}

const MyContext = React.createContext();
// eslint-disable-next-line no-undef
class MyProvider extends Component {
  state = {
    number: 10
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        countUp: () => this.setState({
          number: this.state.number + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
// eslint-disable-next-line no-undef
class App extends Component {
  render() {
    return (
      <MyProvider>
        <h1>Demo context API</h1>
        <Red />
      </MyProvider>
    )
  }
}

export default App;
