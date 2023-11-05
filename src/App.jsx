import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import ProtectedRoute from "./ui/ProtectedRoute"
import AppLayout from "./ui/AppLayout"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import Reports from "./pages/Reports"
import Course from "./pages/Course"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<Course />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
