import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';




function TodoWrapper() {

    const [todos, setTodos] = useState([

    ])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
        console.log(todos)
    } // สร้าง Function เพิ่มข้อมูลมา โดยเมื่อเราเพิ่มข้อมูลเข้าไปในระบบหรือ Warraper ข้างล่าง จะทำการนำ Input ที่ได้รับจากหน้า Form มาแสดงผล

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo))
    } // สร้าง Function Complete ขึ้นมาโดย จะอิงข้อมูลจาก Todo โดยอิงจาก Id เมื่อมีการ Action ในการคลิก จะทำการ เขียนเส้นค่าเปรียบเหมือนว่าเราทำงานสำเร็จแล้ว


    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    } // สร้าง Function ลบข้อมูลเมื่อมีการ เรียกใช้งาน จะทำการลบข้อมูลใน ID นั้น

    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo))
    } //ใช้อ้างอิงข้อมูล ID ว่า เราต้องการจะอัพเดตถูกต้องหรือตรงกันหรือไม่

    const editTask = (task , id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing: !todo.isEditing}: todo))
    } // เปลี่ยนแปลงค่าข้อมูลข้างใน โดยใช้ในส่วนของหน้า EditTodoForm

    return (
        <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo} />
        {/* หน้าจอแสดงผลของ TodoList */}
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    )
}

export default TodoWrapper

