
export const fetchTeams = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_TEAMS'});
        fetch(`/api/teams`)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_TEAMS', cards: responseJSON})
            })
    }
};

export const fetchPlayers = params => {
    return dispatch => {
        dispatch({ type: 'LOADING_PLAYERS' });
        fetch(`/api/teams/:id/players`)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_PLAYERS', cards: responseJSON})
            })
    }
};
