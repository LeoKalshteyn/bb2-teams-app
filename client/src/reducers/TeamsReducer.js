// Reducers take in the argument of the state set to the default initial state and the action helps the reducer determine what needs to be done with the state.
export default function TeamsReducer(state = {
    cards: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_TEAMS':
            return {
                ...state,
            };

        case 'ADD_TEAMS':
            return {
                ...state,
                cards: action.cards,
            };

        case 'DISPLAY_TEAMS':
            return {
                ...state,
                object: action.object,
            };

        // case 'SORT_TEAMS':
        //     return {
        //         ...state,
        //         cards: action.cards.slice().sort(function(team1, team2) {
        //           if (team1.name < team2.name) return -1;
        //           if (team1.name > team2.name) return 1;
        //           return 0;
        //     })};

        default:
            return state
    }
}
