import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
      value: 1, 
    }
  }

  handleChange=(event)=>{
    this.setState({value: event.target.value});
  }
 
  handleSubmit=()=>{
    console.log('yay')
    this.props.fetchVote(this.state.value, this.props.item.id);
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
