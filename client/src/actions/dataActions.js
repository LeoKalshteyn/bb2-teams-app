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

  export const searchTeams = term => {
      return dispatch => {
          dispatch({ type: "LOADING_TEAMS"});
          fetch(`/api/specific?term=${term}`)
              .then(res => res.json())
              .then(responseJSON => { dispatch ({ type: "ADD_TEAMS", card: responseJSON})
              })
      }
};
