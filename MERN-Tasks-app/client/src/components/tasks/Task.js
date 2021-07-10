import React from 'react';

const Task = ({ taskInfo }) => {
    return (
        <li className="task shadow">
            <p>{taskInfo.name}</p>

            <div className="status">
                {taskInfo.status
                    ? (
                        <button
                        type="button"
                            className="complete"
                        >
                            Complete
                        </button>
                    )
                    : (
                        <button
                        type="button"
                            className="incomplete"
                        >
                            Incomplete
                        </button>
                    )
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
 
export default Task;