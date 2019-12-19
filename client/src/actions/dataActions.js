export const fetchCards = path => {
    const upperPath = path.toUpperCase();
    return (dispatch) => {
        dispatch({ type: `LOADING_${upperPath}`});
        fetch(`/${path}`)
            .then(res => res.json())
            .then(responseJSON => { dispatch({ type: `ADD_${upperPath}`, cards: responseJSON})
            })
    }
}
