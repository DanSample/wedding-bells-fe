import axios from "axios";

// add additional actions with:
// export const ${action_name} = '${action_name}';

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const TOGGLE_AUTH_MODAL = "TOGGLE_AUTH_MODAL";

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	return axios
		.post("http://localhost:5000/api/auth/login", creds)
		.then(res => localStorage.setItem("token", res.data.token));
};

export const signup = creds => dispatch => {
	dispatch({ type: SIGNUP_START });
	return axios.post("http://localhost:5000/api/auth/register", creds);
};

export const signout = () => dispatch => {};

export const toggleAuthModal = () => dispatch => {
	dispatch({ type: TOGGLE_AUTH_MODAL });
};
