import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
      value: 1
    }
  }

  handleChange=(event)=>{
    this.setState({value: event.target.value});
  }

  fetchValue=()=>{
    let configJson = {
    url: 'http://188.116.11.87/graphql',
    method: 'post', 
    data: {
      query: `mutation{rating(product_id:6, group_id:6, value:${this.state.value}, name:"maciej", phone:"3", email:"555",content:"content"){value}}`
      }
    }  

    axios(configJson).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log('error ' + err )
    })
  }
 
  handleSubmit=()=>{
    console.log('yay')
    this.fetchValue();
  }

  render() {
    const { item } = this.props;
    const { value } = this.state;
    const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    return (
      <div className="Product">{console.log(this.state)}
        <h4>name: {item.name}</h4>
        <h4>rating: {item.average}</h4>
        <select value={value} onChange={this.handleChange}>
        {arr.map(i=>{
          return <option key={i} value={i}>{i}</option>
        })}
        </select>
        <button onClick={this.handleSubmit}>VOTE</button>
      </div>
    );
  }
}

export default Product;
