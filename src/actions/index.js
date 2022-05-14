import axios from "axios";

export const addCars = () => {
    return {
        type: 'HAVE/CARS'
    };
};

const fetchPostStart = () => {
    return {
        type: 'POST/FETCH-START',
    };
};
const fetchPostSuccess = (payload) => {
    return {
        type: 'POST/FETCH-SUCCESS',
        payload
    };
};
const fetchCarDetailtSuccess = (payload) => {
    return {
        type: 'POST/FETCH-DETAIL-SUCCESS',
        payload
    };
};
const fetchPostFailed= (payload) => {
    return {
        type: 'POST/FETCH-FAILED',
        payload
    };
};

export const fetchPostAsync = () => {
    return function(dispatch, getState) {
        dispatch(fetchPostStart())
        axios.get('https://rent-cars-api.herokuapp.com/admin/car')
        .then((res)=>{       
            dispatch(fetchPostSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(fetchPostFailed(err))
    })
    };
};

export const fetchCarDetailAsync = (id) => {
    console.log('idparams', id)
    return function (dispatch, getState) {
        dispatch(fetchPostStart());
        axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
        .then((res)=>{
            console.log(res.data,'>>>')
            dispatch(fetchCarDetailtSuccess(res.data))
        })
        .catch((err) => {dispatch(fetchPostFailed(err))})
    }
}