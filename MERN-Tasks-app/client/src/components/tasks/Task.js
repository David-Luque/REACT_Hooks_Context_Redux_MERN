import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ taskInfo }) => {

    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks } = tasksContext;

    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    const [ actualProject ] = project;

    
    const removeTask = id => {
        deleteTask(id)
        getTasks(actualProject.id)
    };


    return (
        <li className="task shadow">
            <p>{taskInfo.name}</p>

            <div className="status">
                {taskInfo.isCompleted
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
                    onClick={() => removeTask(taskInfo.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
 
export default Task;