import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Table from './components/Table';

import { Form, Col, Input, Button } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      email: '',
      skype: '',
      skypeUrl: '',
      phone: ''
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  resetSignature = () => {
    this.setState({
      firstName: '',
      lastName: '',
      position: '',
      email: '',
      skype: '',
      skypeUrl: '',
      phone: ''
    })
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div className="App" style={{ width: '500px', margin: 'auto' }}>
        <header className="App-header">
          <h1>ReFuel Box Email Signature</h1>
          <p>Please fill the form below to generate your signature</p>
        </header>
        <Form layout="vertical" style={{ marginBottom: '20px' }}>
          <Form.Item {...formItemLayout} label="First Name">
            <Input name="firstName" onChange={this.handleChange} value={this.state.firstName} style={{ width: '100%'}}/>
          </Form.Item>
          <Form.Item {...formItemLayout} label="Last Name">
            <Input name="lastName" onChange={this.handleChange} value={this.state.lastName} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Position">
            <Input name="position" onChange={this.handleChange} value={this.state.position} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Email">
            <Input name="email" onChange={this.handleChange} value={this.state.email} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone">
            <Input name="phone" onChange={this.handleChange} value={this.state.phone} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Skype">
            <Input name="skype" onChange={this.handleChange} value={this.state.skype} />
          </Form.Item>
          <Button onClick={this.resetSignature}>Reset Signature</Button>
        </Form>
        <Table
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            position={this.state.position}
            email={this.state.email}
            skype={this.state.skype}
            skypeUrl={this.state.skypeUrl}
            phone={this.state.phone}
          />
      </div>
    );
  }
}

export default App;
