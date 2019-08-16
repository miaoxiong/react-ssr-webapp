import React, { Component } from 'react';
import axios from 'axios'

export default class TestApi extends Component {
  getTopics = () => {
    axios.get('/api/topics').then(resp => {
      console.log(resp)
    }).catch(err => console.log(err))
  }

  login = () => {
    axios.post('/api/user/login', {
      accessToken: '2c739578-027d-49c0-893d-f7c80921c601',
    }).then(resp => {
      console.log(resp)
    })
  }

  markAll = () => {
    axios.post('/api/message/mark_all?needAccessToken=true').then(resp => {
      console.log(resp)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics} type="button">getTopic</button>
        <button onClick={this.login} type="button">login</button>
        <button onClick={this.markAll} type="button">markAll</button>
      </div>
    )
  }
}
