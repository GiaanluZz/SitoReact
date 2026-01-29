import {BrowserRouter, Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Profilo } from "./pages/Profilo";
import Home from "./pages/Home";
import About from "./pages/CarteFamose";
import FormRegistrazione from "./pages/Registrazione";
import Login from "./pages/Login";
import './App.css'
import Header from "./components/Header";
import PostList from "./pages/ListaCarte";
import Card from "./pages/Carta";
import Error from "./pages/Errore404";
import ProtectedRoutes from "./utils/URLProtetto";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FormRegistrazione/>} />
          <Route path="/login" element={<Login/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About />}/>
            <Route path="/profilo/:nome" element={<Profilo/>}></Route>
            <Route path="/list" element={<PostList/>}></Route>
            <Route path="/list/:nome" element={<Card/>}></Route>
            <Route path="/*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
//la route profilo/:nome ha i due punti perché l'url sa che dopo i due punti c'è una variabile
export default App
