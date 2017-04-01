export default function reducer(state = {
    "fetching": false,
    "activeIndex": 0,
    "leftArrowDisabled": true,
    "rightArrowDisabled": false,
    "images": []
}, action) {
    switch (action.type) {
        case "FETCH_IMAGES":
            {
                return { ...state,
                    fetching: true,
                    images: action.payload
                };
            }
        default:{
            return state;
        }
    }
};