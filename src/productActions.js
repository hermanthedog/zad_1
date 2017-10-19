import axios from 'axios';
const GET_PRODUCTS = 'GET_PRODUCTS';
const SEND_VOTE = 'SEND_VOTE';


export function fetchProducts(){
	return (dispatch)=> {
		return axios({
		url: 'http://188.116.11.87/graphql',
    	method: 'post', 
    	data: {
      		query: `query{product{id, name, average}}`
      	}
    }).then(function(response){
    	dispatch(receiveData(response.data));
	})
}}

export function receiveData(data){
	return{
		type: GET_PRODUCTS, 
		data
	}
}

export function fetchVote(value, id){
	return (dispatch)=> {
		return axios({
		url: 'http://188.116.11.87/graphql',
    	method: 'post', 
    	data: {
      		query: `mutation{rating(product_id:${id}, group_id:${id}, value:${value}, name:"maciej", phone:"3", email:"555",content:"content"){value}}`
      	}
    }).then(function(response){
    	dispatch(sendVote(response.data))
	}).then(()=>{
		dispatch(fetchProducts())
	})
}}


export function sendVote(value){
	return{
		type: SEND_VOTE,
		value
	}

}