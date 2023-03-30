import './6.style3.css'
import {useReducer, useState} from 'react'

let nextTaskId = 3
const initTasks = [
    {taskId: 0, content: 'visit museum', done: true},
    {taskId: 1, content: 'watch show', done: false},
    {taskId: 2, content: 'walk street', done: false}
]

function tasksReducer(tasks, action) {
    let nextTaks

    switch(action.type) {
        case 'add': {
            nextTaks = [...tasks, {
                taskId: action.taskId,
                content: action.content,
                done: false
            }]
        }; break
        case 'change': {
            let item
            nextTaks = tasks.map(task => {
                if(task.taskId === action.task.taskId)
                    item = action.task
                else item = task
                return item
            })
        }; break
        case 'delete' : {
            nextTaks = tasks.filter(task => task.taskId !== action.taskId)
        }; break
        default: throw Error('unkonwn action: ' + action.type)
    }

    return nextTaks
}

export default function MyReducer() {
    const [tasks, dispatch] = useReducer(tasksReducer, initTasks)

    function onAddTask(content) {
        dispatch({
            type: 'add',
            taskId: nextTaskId++,
            content
        })
    }

    function onChangeTask(task) {
        dispatch({
            type: 'change',
            task
        })
    }

    function onDeleteTask(taskId) {
        dispatch({
            type: 'delete',
            taskId
        })
    }

    return (
        <>
            <h1>diary</h1>
            <AddTask onAddTask={onAddTask}/>
            <TaskList
                tasks={tasks}
                onChangeTask={onChangeTask}
                onDeleteTask={onDeleteTask}/>
        </>
    )
}

function AddTask({onAddTask}) {
    const [content, setContent] = useState('')

    return (
        <>
            <input
                placeholder='add task'
                value={content}
                onChange={e => setContent(e.target.value)}/>
            <button onClick={() => {
                setContent('')
                onAddTask(content)
            }}>
                add
            </button>
        </>
    )
}

function TaskList({tasks, onChangeTask, onDeleteTask}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.taskId}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}/>
                </li>
            ))}
        </ul>
    )
}

function Task({task, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false)

    let taskItem
    if(isEditing) {
       taskItem = (
            <>
                <input
                    value={task.content}
                    onChange={e => onChange({
                        ...task,
                        content: e.target.value
                    })}/>
                <button onClick={() => setIsEditing(false)}>
                    save
                </button>
            </>
       )
    } else {
        taskItem = (
            <>
                {task.content}
                <button onClick={() => setIsEditing(true)}>
                    edit
                </button>
            </>
        )
    }

    return (
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={e => onChange({
                    ...task,
                    done: e.target.checked
                })}
            />
            {taskItem}
            <button onClick={() => onDelete(task.taskId)}>
                delete
            </button>
        </label>
    )
}