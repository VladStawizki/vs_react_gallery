import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Gallery from "./js/components/gallery/Gallery.jsx";
import store from "./js/store";

const gallery = document.getElementById('gallery');
ReactDOM.render(<Provider store={store}>
    <Gallery />
</Provider>, gallery);