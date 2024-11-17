import "./App.css";

import {SwitchTransition, CSSTransition } from 'react-transition-group'
import React, {useState, lazy, Suspense} from 'react'
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "./components/home";

const AboutUs = lazy(() => import("./components/about"))
const Users = lazy(() => import("./components/users"))
const NotFound = lazy(() => import("./components/NotFound"))
const UserProfile = lazy(() => import("./components/userProfile"))
const SearchUser = lazy(() => import("./components/searchUser"))
const AuthProfile = lazy(() => import("./components/authProfile"))
const Login = lazy(() => import("./components/login"))
function App() {
  const location = useLocation()
  const [username, setUsername] = useState("")
  const [isLogged, setIsLogged] = useState(false)
  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition 
          key={location.path} 
          className="fade" 
          timeout={900} 
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Load...</h1>}>
            <Routes location={location}> 
              {/* <Route path="/" element={<Navbar isLogged={isLogged}/>}> */}
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/user/:username" element={<UserProfile />} />
                <Route path="/searchUser" element={<SearchUser />} />
                <Route path="/login" element={<Login  
                  setUsername={setUsername}
                  setIsLogged={setIsLogged}/>}/>
                <Route path="/authProfile" element={isLogged ? (<AuthProfile username={username}/>):(<Navigate replace to={"/login"} />)} />
              {/* </Route> */}
              <Route path="*" element={<NotFound />} />
           </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
