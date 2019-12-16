export default function DataReducer(state = {
    cards: [],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_TEAMS':
            return {
                ...state,
                cards: [...state.cards],
                loading: true
            };

        case 'ADD_TEAMS':
            return {
                ...state,
                cards: action.cards,
                loading: false
            };

        default:
            return state
    }
}
