import React, { useState } from 'react'

function EditTodoform({editTodo,task}) {


    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()

        editTodo(value,task.id)

        setValue("") 
    }



    return (
        <form action="" className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" name="" id="" className='todo-input' placeholder='Update Task' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>แก้ไขข้อมูล</button>
        </form>
    )
}

export default EditTodoform