const initialState = {
    cars: false
}

const isHaveCarsReducer= (state = initialState, action) => {
    switch(action.type){
        case 'HAVE/CARS':
            return {
                ...state,
                cars: true
            }
        default:
            return state
    }
}

export default isHaveCarsReducer;