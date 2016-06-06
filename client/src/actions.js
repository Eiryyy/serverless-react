import fetch from 'isomorphic-fetch';

export const REQUEST = 'REQUEST';
function request() {
    return {
        type: REQUEST
    };
}

export const RECEIVE = 'RECEIVE';
function recieve(result) {
    return {
        type: RECEIVE,
        message: result.message
    };
}

export function fetchHello() {
    return (dispatch) => {
        dispatch(request());

        return fetch('https://xxxxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/hello').then((response) => {
            return response.json();
        }).then((result) => {
            return dispatch(recieve(result));
        });
    };
}
