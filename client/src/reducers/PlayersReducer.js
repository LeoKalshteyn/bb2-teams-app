export default function PlayersReducer(state = {
    cards: [],
    loading: false,
    team: "Team"
}, action) {
    switch (action.type) {
        case 'LOADING_PLAYERS':
            return {
                ...state,
                loading: true
            };

        case 'ADD_PLAYERS':
            return {
                ...state,
                cards: action.cards,
                loading: false
            };

        case 'DISPLAY_PLAYER':
            return {
                ...state,
                piece: action.piece,
                loading: false
            };

        case 'SET_TEAM':
            return {
                ...state,
                role: action.role
            };

        default:
            return state
    }
}
