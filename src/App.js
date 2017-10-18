import React, { Component } from 'react';
import './App.css';
import Product from './Product';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
    }
  }

  fetchData=()=>{
    let config = {
      url: 'http://188.116.11.87/graphql',
      method: 'post', 
      data: {
        query: `query{product{id, name, average}}`
      }
    }  
    axios(config).then(res=>{
      this.setState({data:res.data.data.product})
    }).catch(err=>{
      console.log('ups ' + err )
    })
  }

  componentDidMount(){
    this.fetchData()
  }

  render() {
    const { data } = this.state;
    
    return (
      <div className="App">{console.log(this.state)}
      {data.map(product=>{ 
        return <Product fetchData={this.fetchData} key={product.id} item={product}/>
      })}
      </div>
    );
  }
}

export default App;
