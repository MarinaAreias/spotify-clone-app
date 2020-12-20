export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null, 
    token: null,
}; 

//the state is how it currently looks, like something form list above
// the action how we manipulate how tha data looks like. Set the user, set the currently playing etc


const reducer = (state, action) => {
    //use this console.log as a debugging tool
console.log(action);

// action got dispatched. Action --> has a type and a [payload]
// in the case bellow the Type of the action was SET_USER and the payload was user 

switch(action.type) {
    case "SET_USER":
        return {
            ...state, 
            user: action.user,
        };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

            case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };

                case "SET_DISCOVER-WEEKLY":
                   return{ ...state,
                    discover_weekly: action.discover_weekly, 
                };
                
  default: 
        return state;
}
};

export default reducer;