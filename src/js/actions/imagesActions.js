import axios from "axios";

export function fetchImages() {
    return (dispatch) => {
        axios.get("/data/images.json")
            .then((response) => {
                dispatch({
                    type: "FETCH_IMAGES",
                    payload: response.data
                });
            })
            .catch((err) => {
                console.log('ajax error: ', err);
            });
    }
}

export function slideRight() {
    return (dispatch) => {
        dispatch({
            type: "SLIDE_RIGHT"
        });
    }
}

export function slideLeft() {
    return (dispatch) => {
        dispatch({
            type: "SLIDE_LEFT"
        });
    }
}

export function slidingDone() {
    return (dispatch) => {
        dispatch({
            type: "SLIDING_DONE"
        });
    }
}