import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FormTask from '../tasks/FormTask';
import ListTask from '../tasks/ListTask';

const Projects = () => {
    return (
        <div className="container-app">
            
            <Sidebar />

            <div className="main-section">
                <Header/>

                <main>
                    <FormTask/>

                    <div className="container-tasks">
                        <ListTask/>
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Projects;