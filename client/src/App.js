import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Messages } from './components/Messages'
import CreateMessage from './components/CreateMessage';
import { getMessages, postMessage } from './services/MessageService'

class App extends Component {

  state = {
    message: {},
    messages: [],
  }

  createMessage = (e) => {
    postMessage(this.state.message)
        .then(message => {
          console.log(message);
          // Add the message to list messages when the user create the message
          this.setState({messages: [...this.state.messages, message]})
      });
  }

  getAllMessages = () => {
    getMessages()
      .then(messages => {
        console.log(messages)
        this.setState({messages: messages})
      });
  }

  componentDidMount() {
    this.getAllMessages();
  }

  onChangeForm = (e) => {
      let message = this.state.message
      if (e.target.name === 'username') {
          message.userName = e.target.value;
      } else if (e.target.name === 'message') {
          message.text = e.target.value;
      }
      this.setState({message})
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container py-4">
          <div  className="row">
            <div className="col-md-6">
              <CreateMessage 
                message={this.state.message}
                onChangeForm={this.onChangeForm}
                createMessage={this.createMessage}
                >
              </CreateMessage>
            </div>
            <div className="col-md-6">
              <Messages messages={this.state.messages}></Messages>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
