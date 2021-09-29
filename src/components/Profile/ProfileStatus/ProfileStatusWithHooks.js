import React, {useEffect, useState} from "react";

import './prosile-status.css'

const ProfileStatusWithHooks = (props) => {
   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);

   useEffect(() => {
       setStatus(props.status);
   }, [props.status]);
   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
       setEditMode(false);
   }

   const onStatusChange = (e) => {
       setStatus(e.currentTarget.value);
       props.updateUserStatus(status);
   }
    return (
        <div className="status">
            {!editMode &&
            <div className="status__state"
                 onDoubleClick={activateEditMode}>
                {props.status || "Status empty"}</div>
                }
            {editMode && <input className="status__input"
                type="text"
                value={props.status}
                onBlur={deactivateEditMode}
                onChange={onStatusChange}
                autoFocus={true}/> }
        </div>
    )
}

export default ProfileStatusWithHooks;