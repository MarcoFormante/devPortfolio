import { Route, Routes } from "react-router";
import Header from "./layouts/Header";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div className="flex">
        <Header/>
        <main className="flex-6">
            <Routes>
               <Route index element={<Home/> } />
            </Routes>
        </main>
        
    </div>
  )
}
