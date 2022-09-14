import React from 'react';
import { useParams } from 'react-router-dom';

const TasksDetailPage = ({ task }) => {

    const { id } = useParams();

    return (
        <div>
            <h1>Tasks details { id }</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    );
}

export default TasksDetailPage;
