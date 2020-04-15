import userAPI from '../../services/userAPI';

const stateInitial = { 
    name: '',
    mail: '',
    subject: '',
    message: '',
    error: ''
};

export const SEND_SUCCESS = "SEND_SUCCESS";
export const SEND_ERROR = "SEND_ERROR";

const reducer = (state = stateInitial, action : {type: string, payload : any}) => {
    switch(action.type){
        case SEND_SUCCESS:
            return {
                ...state,
                ...action.payload,
                error: false
            }
        case SEND_ERROR: 
            return {
                ...state,
                error: 'message non envoyé'
            }
        default:
            return state;
    }
};


export const send = (formState) => (dispatch, getState) => {
     console.log( "state from contact component: ", formState);

     return userAPI.sendMessage(formState)
        .then( (res) => {
            console.log("res: ",res.data);
            dispatch(sendSuccess(res.data));
        })
        .catch( err => {
            console.log("err : ", err);
            dispatch(sendError());
        });
};
 
export const sendSuccess = (payload) => ({
    type: SEND_SUCCESS,
    payload

});

export const sendError = () => ({
    type: SEND_ERROR

});

export default reducer;