import React, { useEffect, useState } from 'react';
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import { motion } from "framer-motion"
import icon from "./icon.png"
import './App.css';
import Day from './Day';


function App(props) {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [completed, setCompleted] = useState([])
    const [canceled, setCanceled] = useState([])
    const [push, setpush] = useState(true)

    const something = () => {
        if (push) {
            addNotification({
                title: 'To Do',
                subtitle: 'Congratulations',
                message: 'You have successfully created your first To Do',
                theme: 'light',
                closeButton: "X",
                backgroundTop: "blue",
                backgroundBottom: "skyblue"
            })
            setpush(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            addNotification({
                title: 'Hello 👋️',
                native: true,
                message: 'Welcome to To Do 🖊️',
            })
        }, 3000);
    }, [])

    return (
        <div className='all' >
            <Notifications position='top-right' />
            <div className="app">
                <div className="mainHeading">
                    <h1>ToDo List</h1>
                </div>
                <motion.div className="subHeading"
                    animate={{ y: 90, }}
                    transition={{ type: "spring", duration: 2, bounce: 0.4 }} >
                    <br />
                    <Day />
                </motion.div>
                <div className="input">
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="&nbsp;🖊️ Add item..." />
                    {/* <i onClick={() =>{
                         setTodos([...todos, { id: Date.now(), text: todo, status: "Done" }])
                         setTodo('')
                    }} className="fas fa-plus"></i> */}
                    <h6 onClick={() => {
                        setTodos([...todos, { id: Date.now(), text: todo, status: "Done" }])
                        setTodo('')
                        something()
                    }} className="cancel" >+</h6>

                </div>
                <div className="todos">
                    {todos.map((obj) => {
                        return (
                            <div className="todo">
                                <div className="left">
                                    <input className='type' type="button" onClick={(e) => {
                                        setTodos(todos.filter((obj2) => {
                                            if (obj2.id === obj.id) {
                                                setCompleted([...completed, obj2])
                                            } return null
                                        }))
                                        setTodos(todos.filter((element) => element.id !== obj.id))
                                    }}
                                        value={obj.status} name="" id="" />
                                    <p>{obj.text}</p>
                                </div>
                                
                                <div className="right">
                                    <p onClick={(e) => {
                                        setTodos(todos.filter((element) => {
                                            return setCanceled([...canceled, element])
                                        }))
                                        setTodos(todos.filter((element) => element.id !== obj.id))
                                    }} className="cancel" >x</p>
                                </div>
                            </div>)
                    })}


                </div>
            </div>

            <div className='todo-box'>
                <div className='completed' >
                    <h2>Completed Tasks⏳️</h2>
                    {completed.map((obj) => {
                        return (<p>{obj.text}</p>)
                    })}
                </div>
                <div className='canceled'>
                    <h2>Canceled Tasks🗑️</h2>
                    {canceled.map((obj) => {
                        return (<p>{obj.text}</p>)
                    })}
                </div>
                <div id='icons8' >
                    <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/HpPqCqynotVp/microsoft-todo-2019">Microsoft Todo 2019</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </div>
            </div>
        </div>
    );
}

export default App;

