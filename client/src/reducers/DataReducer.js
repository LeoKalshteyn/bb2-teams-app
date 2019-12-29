export default function DataReducer(state = {
    cards: {
        teams: [],
        players: [],
        star_players: []
    },
    team_name: "Select Team",
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
                piece: action.piece,
                loading: false
            };

        case 'SET_TEAM':
            return {
                ...state,
                team_name: action.team_name
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
                piece: action.piece,
                loading: false
            };

        default:
            return state
    }
}
