export const apiUrl = process.env.NODE_ENV !== 'production'
		? 'http://localhost:8080/api'
		: 'https://harryapp.herokuapp.com/api';

export const LOCAL_STOGARE_TOKEN_NAME = 'user token'