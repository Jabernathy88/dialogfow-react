import React, { Component } from 'react';
// import Main from './components/Main.js'
import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div id="content">

        {/* temp header */}
        <header>
          <img className="header-img-logo" src="./images/helium-logo.png" alt="" />
        </header>
        <img className="header-text-logo" src="./images/helium-text-logo.png" alt=""/>
        <div className="blue-bar pt-4 pb-4 text-center">
          <h4>( Dialogflow React Mockup )</h4>
        </div>

        {/* <Main /> */}
        <br />
        <div className="container-fluid">
          <h5>Meet our new intern. Her name is Katie. Say hi!</h5>      

          <div className="chat chat-container">
            <div className="chat chat-header">
              <div className="chat chat-header-wrapper w-100">
                <div className="chat chat-icon">
                  {/* img */}
                </div>
                <div className="chat chat-title">Katie</div>
                <div className="chat chat-subtitle">Marketing Intern</div>
              </div>
            </div>

            <div className="chat chat-top-nav text-right">
              Powered by Helium
            </div>

            <div className="chat chat-result">
              {/* main content */}
            
            </div>

          </div>

        </div>
        
      </div>
    );
  }
}

export default App;