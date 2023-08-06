import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"
import { Routes, Route } from 'react-router-dom';
import { Hotels } from "./pages/Hotels";
import { Flights } from "./pages/Flights";
import { Foods } from "./pages/Foods";
import { Transports } from "./pages/Transports";

function App() {
  return (
    <>
      <div className="container max-w-2xl min-h-screen pb-10 mx-auto bg-white shadow-2xl shadow-slate-950">
      <Header />
        <Navigation />
        <div className="px-3 mt-8 sm:px-2">

    
        <Routes>
            <Route
              path="/"
              element={<Hotels />}></Route>
            <Route
              path="/flights"
              element={<Flights  />}></Route>
            <Route
              path="/foods"
              element={<Foods />}></Route>
            <Route
              path="/transports"
              element={<Transports />}></Route>
          
          </Routes>
          </div>
      </div>
    </>
  )
}

export default App
