import React from "react";

import './prosile-status.css'

class ProfileStatusWithHooks extends React.Component {
   constructor(props) {
       super(props);
   }

   state = {
       editMode: false,
   }

   componentDidUpdate(prevProps,prevState) {
       if(prevProps.status !== this.props.status) {
           this.setState({
               status: this.props.status
           })
       }
   }

    activateEditMode = () => {
       this.setState({
           editMode: true,
           status: this.props.status
       })
   }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onChangeStatus = (e) => {
       const statusValue = e.currentTarget.value;
       this.setState({
           status: statusValue
       })
    }

   render() {
       return (
           <div className="status">
               {this.state.editMode ?
               <input className="status__input" type="text"  value={this.state.status} onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} autoFocus={true}/> :
               <div className="status__state" onDoubleClick={this.activateEditMode}>{this.props.status || "Status empty"}</div>}
           </div>
       )
   }
}

