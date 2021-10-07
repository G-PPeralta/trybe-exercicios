import React from 'react'

const Task = (value) => {
  const tasks = ['estudar', 'projeto', 'react']
  value = tasks.map((item) => <li>{item}</li>)

  return (
    <ul>{value}</ul>
  )
}

export default Task