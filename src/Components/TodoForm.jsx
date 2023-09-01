import React, { useState } from 'react'

function TodoForm({addTodo}) {


    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        addTodo(value)

        setValue("") //โดยเมื่อกรอกข้อมูลแล้วจะทำการทำให้ค่า Input เป็นค่าว่าง
    }



    return (
        <form action="" className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" name="" id="" className='todo-input' placeholder='What is the task to day?' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm