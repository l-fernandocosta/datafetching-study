import { Route, Routes } from "react-router-dom";
import { Repo } from "./Pages/Repo";
import { Repos } from "./Pages/Repos";

export function App() {
  return (
    <Routes>
      <Route element={<Repos/>} path="/"/>
      <Route element={<Repo/>} path="/repos/*"/>
    </Routes>
  )
}