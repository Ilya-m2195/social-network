import { useState } from "react";

export const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  
  return (
    <>
      {
        !editMode &&
        <p onDoubleClick={() => setEditMode(true)}>{status ? status : 'No status'}</p>
      }
      {
        editMode &&
        <div>
          <input autoFocus onBlur={() => setEditMode(false)}
            onChange={e => {
              setStatus(e.currentTarget.value);
              props.updateStatus(status);
            }
            }
            type="text" value={status} />
        </div>
      }
    </>
  );
}