export default function AzeriteReducer(state = {
    cards: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_TEAMS':
            return {
                ...state,
                loading: true
            };

        case 'ADD_TEAMS':
            return {
                ...state,
                cards: action.cards,
                loading: false
            };

        case 'DISPLAY_TEAMS':
            return {
                ...state,
                piece: action.piece,
                loading: false
            };

        default:
            return state
    }
}
