import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeSession } from "../features/auth/authSlice";
import { ProtectedRoute } from "./ProtectedRoute";
import { Courses, Grades, Home, Login, News, Panel, Profile, Training,CodeBot,NotFound, Notifications} from "../pages";
import AdminRegister from "../components/AdminRegister";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dispatch(initializeSession());
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/grades"
        element={
          <ProtectedRoute>
            <Grades />
          </ProtectedRoute>
        }
      />
      <Route
        path="/news"
        element={
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        }
      />
      <Route
        path="/training"
        element={
          <ProtectedRoute>
            <Training />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/panel"
        element={
          <ProtectedRoute>
            <Panel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/codebot"
        element={
          <ProtectedRoute>
            <CodeBot />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications/>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<AdminRegister />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
