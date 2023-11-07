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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
})

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
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
  <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#18212f",
              color: "#e5e7eb",
            },
          }}
        />
  </QueryClientProvider>
    </>
  )
}

export default App
