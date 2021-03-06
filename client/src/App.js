import React, { Component } from 'react';
// import Main from './components/Main.js'
import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div id="content">

        {/* temp header */}
        <header>
          <div className="w-100">
            <img className="header-img-logo" src="./images/helium-logo.png" alt="" />
          </div>
          <img className="header-text-logo" src="./images/helium-text-logo.png" alt=""/>
          <div className="blue-bar py-2 text-center w-100">
            <h4>( Dialogflow React Mockup )</h4>
          </div>
        </header>

        {/* <Main /> */}
        <div className="container-fluid pt-2">
          {/* <p><strong>Meet our new intern. Say hi!</strong></p>       */}

          <div className="chat-container bg-white">
            <div className="chat-header">
              <div className="chat-header-wrapper w-100 d-flex align-items-center text-white">
                <div className="chat-icon text-center d-inline-block d-inline-block m-4">
                  <img className="chat-img-logo" src="./images/helium-white-icon.png" alt="" />
                </div>
                
                <div className="d-inline-block">
                  <div className="chat-title">
                    <h4 className="font-weight-normal p-0">Katie</h4>
                  </div>
                  <div className="chat-subtitle font-weight-light small">
                    Marketing Intern
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-top-nav text-right p-2 small">
                <span className="text-white-50">POWERED BY </span><strong className="text-light">HELIUM</strong>
            </div>

            <div className="chat-result w-100 pt-4 pb-1">
              {/* main content */}
              <table className="chat-table">
                <tbody>
                  <tr>
                    <td id="result" className="small">
                      <div className="user-request float-left">
                        Hello. Namaste!
                      </div>
                      <div className="server-response float-right">
                        Hi! My name is Katie, the new Helium Services Intern. What's your name?
                      </div>
                      <div className="user-request float-left">
                        Jeremy.
                      </div>
                      <div className="server-response float-right">
                        Thank you Jeremy. Now, could I get the best phone number where we can follow-up with you, and maybe an email address?
                      </div>
                      <div className="user-request float-left">
                        404 444 4444
                      </div>
                      <div className="server-response float-right">
                        Thank you for that. Now tell me about this amazing idea we can build together.
                      </div>
                      <div className="user-request float-left">
                        I'm thinking a mobile app with floating action buttons. Would that be okay?
                      </div>
                      <div className="server-response float-right">
                        Let me pass you along to Joe for more details. Just a moment ...!
                      </div>

                      <div className="user-request float-left">
                        Hello. Namaste!
                      </div>
                      <div className="server-response float-right">
                        Hi! My name is Katie, the new Helium Services Intern. What's your name?
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="clearfix"></div> */}
            <div className="chat-input p-2 small">
              <form id="chatForm" className="h-100 float-left" action="">
                <input id="query" className="h-100 w-100 pl-2" type="text" placeholder="Type your message here..." />
              
              </form>
              <div className="mic-icon float-right py-2 pr-1">
                <a className="" href="#"><i className="material-icons text-secondary">mic_none</i></a>
              </div>

            </div>
          </div>

          {/* iframe demo */}
          {/* <div className="iframe-demo d-flex justify-content-center">
            <iframe
              allow="microphone;"
              width="350"
              height="430"
              src="https://console.dialogflow.com/api-client/demo/embedded/heliumchatbot">
            </iframe>
          </div> */}



        </div>
        
      </div>
    );
  }
}

export default App;