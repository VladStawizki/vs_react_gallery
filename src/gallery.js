import React from "react";
import ReactDOM from "react-dom";

import Gallery from "./js/components/Gallery";

import styles from "./scss/index.scss";



const gallery = document.getElementById('gallery');
ReactDOM.render(<Gallery/>, gallery);