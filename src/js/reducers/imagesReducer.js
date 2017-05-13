export default function reducer(state = {
    "sliding": false,
    "activeIndex": 0,
    "leftArrowDisabled": true,
    "rightArrowDisabled": false,
    "images": []
}, action) {
    switch (action.type) {
        case "FETCH_IMAGES":
            {
                return { ...state,
                    images: action.payload
                };
            }
        case "SLIDE_RIGHT":
            {
                return {
                    ...state,
                    sliding: true,
                    activeIndex: state.activeIndex + 1,
                    leftArrowDisabled: (state.activeIndex + 1 == 0),
                    rightArrowDisabled: (state.activeIndex + 1 == state.images.images.length - 1)
                }
            }
        case "SLIDE_LEFT":
            {
                return {
                    ...state,
                    sliding: true,
                    activeIndex: state.activeIndex - 1,
                    leftArrowDisabled: (state.activeIndex - 1 == 0),
                    rightArrowDisabled: (state.activeIndex - 1 == state.images.images.length - 1),
                }
            }
        case "SLIDING_DONE":
            {
                return {
                    ...state,
                    sliding: false
                }
            }
        default:
            {
                return state;
            }
    }
};