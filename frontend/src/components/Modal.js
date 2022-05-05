import React, { Component } from "react";
import {
    button,
    modal,
    modalheader,
    modalfooter,
    modalbody,
    form,
    formgroup,
    input,
    label,
} from "reactstrap";

export default class CustomModal extends Component{
    constructor(props){
        super(props);
        this.state={
             activeItem: this.props.activeItem,
        };
    }

    handlechange = (e) => {
        let { name, value} = e.target;

        if(e.target.type === "checkbox"){
                value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };


    render() {
        const {toggle, onSave} = this.props;

        return(
            <modal isOpen = {true} toggle={toggle}>
        )
    }
}
