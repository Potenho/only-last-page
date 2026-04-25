import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/header/header"
import Search from "./components/search/search"
import About from "./components/about/about"
import Loading from "./components/loading/loading"

export default function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false)
    } ,  2000)
      
    return () => clearTimeout(timer);

  })
  return (
    <>


 {isLoading ?  <Loading/> :(
<div className="app">  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  )}
    </>
  )
}