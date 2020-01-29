export default function StarPlayersReducer(state = {
    cards: [],
    loading: false,
    team: "Select Team"
}, action) {
    switch (action.type) {
        case 'LOADING_STAR_PLAYERS':
            return {
                ...state,
                loading: true
            };

        case 'ADD_STAR_PLAYERS':
            return {
                ...state,
                cards: action.cards,
                loading: false
            };

        case 'DISPLAY_STAR_PLAYERS':
            return {
                ...state,
                object: action.object,
                loading: false
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
