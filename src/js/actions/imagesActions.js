import axios from "axios";

export function fetchImages() {
    return function (dispatch) {
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