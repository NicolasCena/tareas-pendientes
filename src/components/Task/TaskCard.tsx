import { createContext } from 'react'
import { Tasks } from '../../mock/TasksMock'; // Momentaneo hasta realizar la API

const Task = ({ children }: { children: JSX.Element }) => {

  const TaskContext = createContext({})
  const { Provider } = TaskContext;

  return (
    <Provider value={Tasks}>
      <div className='task'>
        { children }
      </div>
    </Provider>
  )
}

export default Task
