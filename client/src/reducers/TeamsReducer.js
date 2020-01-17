export default function TeamsReducer(state = {
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
                piece: state.cards.teams.find(card => action.id === card.id),
                loading: false
            };

        default:
            return state
    }
}