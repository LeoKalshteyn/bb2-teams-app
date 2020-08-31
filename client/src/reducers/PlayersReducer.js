export default function PlayersReducer(state = {
    cards: [],
    loading: false,
    team: "Select Team"
}, action) {
    switch (action.type) {
        case 'LOADING_PLAYERS':
            return {
                ...state,
            };

        case 'ADD_PLAYERS':
            return {
                ...state,
                cards: action.cards,
            };

        case 'DISPLAY_PLAYERS':
            return {
                ...state,
                object: action.object,
            };

        case 'SET_TEAM':
            return {
                ...state,
                team: action.team
            };

        default:
            return state
    }
}
