import React, { Component } from 'react';
// import Main from './components/Main.js'
import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div id="content">

        {/* temp header */}
        <header className="w-100">
          <img className="header-img-logo" src="./images/helium-logo.png" alt="" />
        </header>
        <img className="header-text-logo" src="./images/helium-text-logo.png" alt=""/>
        <div className="blue-bar py-2 text-center w-100">
          <h4>( Dialogflow React Mockup )</h4>
        </div>

        {/* <Main /> */}
        <div className="container-fluid pt-2">
          {/* <p><strong>Meet our new intern. Say hi!</strong></p>       */}

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

            <div className="chat chat-result w-100">
              {/* main content */}
              <table className="chat chat-table">
                <tbody>
                  <tr>
                    <td id="chatResult">
                      <div className="chat user-request">
                        Hello. Namaste!
                      </div>
                      <div className="chat server-response">
                        Hi! My name is Katie, the new Helium Services Intern. What's your name?
                      </div>
                      <div className="chat user-request">
                        Jeremy.
                      </div>
                      <div className="chat server-response">
                        Thank you Jeremy. Now, could I get the best phone number where we can follow-up with you, and maybe an email address?
                      </div>
                      <div className="chat user-request">
                        404 444 4444
                      </div>
                      <div className="chat server-response">
                        Thank you for that. Now tell me about this amazing idea we can build together.
                      </div>
                      <div className="chat user-request">
                        I'm thinking a mobile app with floating action buttons. Would that be okay?
                      </div>
                      <div className="chat server-response">
                        Let me pass you along to Joe for more details. Just a moment ...!
                      </div>

                      <div className="chat user-request">
                        Hello. Namaste!
                      </div>
                      <div className="chat server-response">
                        Hi! My name is Katie, the new Helium Services Intern. What's your name?
                      </div>
                      <div className="chat user-request">
                        Jeremy.
                      </div>
                      <div className="chat server-response">
                        Thank you Jeremy. Now, could I get the best phone number where we can follow-up with you, and maybe an email address?
                      </div>
                      <div className="chat user-request">
                        404 444 4444
                      </div>
                      <div className="chat server-response">
                        Thank you for that. Now tell me about this amazing idea we can build together.
                      </div>
                      <div className="chat user-request">
                        I'm thinking a mobile app with floating action buttons. Would that be okay?
                      </div>
                      <div className="chat server-response">
                        Let me pass you along to Joe for more details. Just a moment ...!
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="clearfix"></div> */}
            <div className="chat-input p-1">
              <form id="chatForm" className="h-100 w-100" action="">
                <input id="chatQuery" className="h-100 w-100" type="text" />
              
              </form>
              <div className="chat mic-icon">
                {/* <i className="fa"></i> */}
              </div>
            
            </div>

          </div>

        </div>
        
      </div>
    );
  }
}

export default App;