import React, { Component } from 'react';
import axios from 'axios'; // yakin begini? hayo kenapa? bedain antara export default n export lgsg
// axios pakai default
// coba check file lain yg pakai axios


export class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {} //kalau datanya satu, mending obj 
    }
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/people/${id}`) 
      .then(res => {
        const item = res.data.results;
        console.log('res ==>', res)
        console.log(item);
        this.setState({ item });
      })
  }
  render() {
    console.log('hm');
    const id = this.props.match.params.id;  
    console.log('tes', id)
    return (
     <h4>Detail {this.state.item.name}</h4>
    )
  }
}
