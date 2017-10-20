import axios from 'axios';
import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_TEST } from './types';

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
	const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

	dispatch({
		type: FETCH_USERS,
		payload: res.data 
	});
};

export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
	const res = await axios.get('/api/current_user');

	dispatch({
		type: FETCH_CURRENT_USER,
		payload: res.data
	});
}

export const fetchTest = () => async (dispatch) => {
	const res = await axios.get('/api/test');

	dispatch({
		type: FETCH_TEST,
		payload: res.data
	});
}