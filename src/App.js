import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Table from './components/Table';
import { Form, Input, Button } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      position: '',
      email: '',
      skype: '',
      skypeUrl: '',
      phone: '',
      bannerUrl: '',
      bannerLink: ''
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  resetSignature = () => {
    this.setState({
      name: '',
      position: '',
      email: '',
      skype: '',
      skypeUrl: '',
      phone: '',
      bannerUrl: '',
      bannerLink: ''
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
          <Form.Item {...formItemLayout} label="Name">
            <Input name="name" onChange={this.handleChange} value={this.state.name} style={{ width: '100%'}}/>
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
          <Form.Item {...formItemLayout} label="Skype URL" style={{ marginBottom: this.state.skype && '0px' }}>
            <Input name="skypeUrl" onChange={this.handleChange} value={this.state.skypeUrl} />
          </Form.Item>
          {
            this.state.skype &&
            <span style={{ display: 'block', marginBottom: '30px' }}>To generate Skype URL, go to <a href="http://is.gd/" target="_blank" rel="noopener noreferrer">http://is.gd/</a> and enter: <strong>skype:{this.state.skype}?chat</strong></span>
          }
          <Form.Item {...formItemLayout} label="Banner URL">
            <Input name="bannerUrl" onChange={this.handleChange} value={this.state.bannerUrl} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Banner Link">
            <Input name="bannerLink" onChange={this.handleChange} value={this.state.bannerLink} />
          </Form.Item>
          <Button onClick={this.resetSignature}>Reset Signature</Button>
        </Form>
        <div style={{ marginBottom: '30px' }}>
          <Table
              name={this.state.name}
              position={this.state.position}
              email={this.state.email}
              skype={this.state.skype}
              skypeUrl={this.state.skypeUrl}
              phone={this.state.phone}
              style={{ marginBottom: '30px' }}
            />
            {
              this.state.bannerUrl &&
              <div>
                <a href={this.state.bannerLink} target="_blank" rel="noopener noreferrer">
                  <img src={this.state.bannerUrl} alt="banner" width="500px" style={{marginTop: '10px' }} /> 
                </a>
              </div>
            }
        </div>
          
      </div>
    );
  }
}

export default App;
