export const initialState = {
    //here is where the data gonna live
    term: null
};

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
};

const reducer = (state, action) => {
    console.log(action);
  //listens to any dispatched actions  
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };

            default:
                return state;
    }
};

export default reducer;
