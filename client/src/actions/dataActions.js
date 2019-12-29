import $ from 'jquery';

export const fetchCards = path => {
    const upperPath = path.toUpperCase();
    return (dispatch) => {
        dispatch({ type: `LOADING_${upperPath}`});
        fetch(`/api/${path}`)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: `ADD_${upperPath}`, cards: responseJSON})
            })
    }
}

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
        let url = '/api/players/search?' + $.param({ team: params.team });
        fetch(url)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: 'ADD_PLAYERS', cards: responseJSON})
            })
    }
};

export const displayPiece = (id, category, type) => {
    return dispatch => {
        dispatch({ type: "LOADING_TEAMS"});
        const data = { id };
        fetch(`/api/${category}/update`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type , piece: responseJSON})
            })
    }
};
