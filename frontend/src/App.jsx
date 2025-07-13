
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
// import toast from 'react-hot-toast'

const App = () => {
  return (

    //     {/* <button onClick={()=> toast.success("congrats")} className='text-center p-4 bg-green-100'>click me</button> */}
    //     {/* <button onClick={()=> toast.error("not done")}>click me</button> */}
    //     {/* <div data-theme="forest">
    //   This div will always use forest theme
    //   <span data-theme="retro">This span will always use retro theme!</span>
    // </div> */}
    //     {/* <button className='btn btn-primary'>click me</button> */}

    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
