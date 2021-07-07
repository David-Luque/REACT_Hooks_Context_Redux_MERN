import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = ({ projectTasks }) => {
    return (
        <Fragment>
            <h2>Project: Virtual shop</h2>
            {/* <ul className="list-tasks">
                {projectTasks.length === 0
                    ? (<li className="task"> <p>No peanding tasks</p> </li>)
                    : projectTasks.map(task => (
                        <Task taskInfo={task} />
                    ))
                }
            </ul> */}

            <button
                type="button"
                className="btn btn-delete"
            >
                Delete project &times;
            </button>
        </Fragment>
        
    );
}
 
export default ListTask;