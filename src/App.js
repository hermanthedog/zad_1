import React, { Component } from 'react';
import './App.css';
import Product from './Product';
import DevTools from './DevTools';
import {connect} from 'react-redux';
import {fetchProducts, fetchVote} from './productActions'

class App extends Component {
  
  componentWillMount(){
    this.props.fetchProducts();
  }

  render() {
    const { data } = this.props;
    
    return (
      <div className="App"><DevTools/>{console.log(this.props)}
      {data.map(product=>{ 
        return <Product fetchVote={this.props.fetchVote} key={product.id} item={product}/>
      })}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    data: state.reducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      fetchProducts:()=>dispatch(fetchProducts()),
      fetchVote:(value, id)=>dispatch(fetchVote(value, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
