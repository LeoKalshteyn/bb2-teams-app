export default function DataReducer(state = {
    cards: {
        teams: [],
        players: [],
        star_players: []
    },
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
                cards: {
                    ...state.cards,
                    teams: action.cards
                },
                loading: false
            };

        case 'DISPLAY_TEAMS':
            return {
                ...state,
                piece: state.cards.teams.find(card => action.id === card.id)
            };

        case 'LOADING_PLAYERS':
            return {
                ...state,
                loading: true
            };

        case 'ADD_PLAYERS':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    players: action.cards
                },
                loading: false
            };

        case 'DISPLAY_PLAYERS':
            return {
                ...state,
                piece: state.cards.players.find(card => action.id === card.id)
            };

        default:
            return state
    }
}
