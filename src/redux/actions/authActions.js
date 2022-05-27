import {AUTH_ERROR, LOGIN, LOGOUT, REGISTER} from "./types";

export const loginViaForm = (data) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        const infoUser = {
            email: result.user.email,
            name: result.user.name,
            type_user: result.user.type_user,
            registeredVia: "loginForm",
        };

        if (result.token) {
            dispatch({
                type: LOGIN,
                payload: result.token,
                user: infoUser,
            });
            alert("Login Success");
        } else {
            authError(result.error);
            alert(result.message);
        }
    } catch (error) {
        authError(error);
        alert("Username or password is incorrect");
    }
};

export const registerViaForm = (data) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        dispatch({
            type: REGISTER,
            payload: result.user,
        });
        alert("Register Success");
        window.location.href = "/login";
    } catch (error) {
        authError(error);
    }
};

const authError = (error) => async (dispatch) => {
    dispatch({
        type: AUTH_ERROR,
        payload: error.message,
    });

    setTimeout(() => {
        dispatch({
            type: AUTH_ERROR,
            payload: null,
        });
    }, 5000);
};

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
    try {
        const data = {
            access_token: accessToken,
        };
        const response = await fetch("http://localhost:8000/api/v1/auth/google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        
        const infoUserGoogle = {
            email: result.user.email,
            name: result.user.name,
            type_user: result.user.type_user,
            registeredVia: "google",
        };

        if (result.token) {
            dispatch({
                type: LOGIN,
                payload: result.token,
                user: infoUserGoogle,
            });
        } else {
            authError(result.error);
        }
    } catch (error) {
        authError(error);
    }
};
