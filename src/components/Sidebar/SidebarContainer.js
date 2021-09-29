import React, {Component} from 'react';

import Sidebar from "./Sidebar";
import {connect} from "react-redux";


let mapPropsToState = (state) => {
    return {
        sidebar: state.sidebar
    }
}
const SidebarContainer = connect(mapPropsToState)(Sidebar);

export default SidebarContainer;