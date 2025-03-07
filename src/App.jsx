import AddTodo from './app/components/AddTodo'
import Todos from './app/components/Todos'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 py-10">
      <h1 className="text-4xl font-bold text-indigo-400 mb-6">Todo List</h1>
      <div className="w-full max-w-2xl">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
