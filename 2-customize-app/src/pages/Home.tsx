import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    setTasks(prevState => {
      return [
        ...prevState,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false,
        }
      ]
    });
  }

  function handleMarkTaskAsDone(id: number) {
    const taskExists = tasks.findIndex(task => task.id === id);
    if (taskExists < 0) return;

    setTasks(prevState => prevState.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }

      return task;
    }))
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks}
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}