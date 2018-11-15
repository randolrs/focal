import React, { Component } from 'react';

//Router
import routes from './router/routes.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Styles
import './styles/App.sass';

//redux things
import { connect } from 'react-redux';
import { simpleAction } from './redux/actions/action-creators.js'

//layout components
import Nav from './components/layouts/nav/Nav.js'
import Footer from './components/layouts/footer/Footer.js'

class App extends Component {

  simpleAction = (event) => {
   this.props.simpleAction();
  }
  render() {
    return (
      <div className="App">
        <Nav />
          <div className="main">
            <pre>
             {
              JSON.stringify(this.props)
             }
            </pre>
            <button onClick={this.simpleAction}>Test redux action</button>
            {routes}
          </div>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
   simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
