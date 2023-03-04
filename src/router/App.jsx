import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { Courses, Grades, Home, Login, News, Panel, Profile } from '../components/index';

function App() {

  return (
    <Routes>
    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
    <Route path="/grades" element={<ProtectedRoute><Grades /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
    <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
    <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}
    <Route path="/panel" element={<ProtectedRoute><Panel /></ProtectedRoute>} /> {/* ProtectedRoute is used to protect the routes that are only accessible to authenticated users */}


    <Route path="/login" element={<Login />} />
  </Routes>
  )
}

export default App
