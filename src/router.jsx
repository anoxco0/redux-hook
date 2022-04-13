import { Route, Routes } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"


export const Router = ()=>{

    return(
        <div>
            <Routes>
                <Route path="/" element={<Sidebar/>} />
            </Routes>
        </div>
    )
}