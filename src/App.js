import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              src="https://pbs.twimg.com/profile_images/1607410723227054082/RaQz46j7_400x400.jpg"
              alt="hero-logo"
              height="100"
              width="100"
            />
            <div className="app__body">
              <div className="app_bodyBackground">
                <Routes>
                  <Route exact path="/" element={<WebcamCapture />} />
                  <Route path="/test" element={<h1>YOOO!</h1>} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/chats" element={<Chats />} />
                  <Route path="/chats/view" element={<ChatView />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
