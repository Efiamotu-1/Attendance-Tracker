import { baseUrl} from "./railsUrl";

export async function getCourses() {
    const {token} = JSON.parse(localStorage.getItem('user'))

    const res = await fetch(`${baseUrl}/courses`, {
        headers: {
            Authorization: token
        }
    })
    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)

      }
      const result = await res.json()
      return result  
}

export async function getCourse(id) {
    const {token} = JSON.parse(localStorage.getItem('user'))
    const res = await fetch(`${baseUrl}/courses/${id}`, {
        headers: {
            Authorization: token
        }
    })
    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)

      }
      const result = await res.json()
      return result  
}

export async function getCourseAttendance(id) {
    const {token} = JSON.parse(localStorage.getItem('user'))
    
    const res = await fetch(`${baseUrl}/${id}/course-reports`, {
        headers: {
            Authorization: token
        }
    })

    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)

      }
      const result = await res.json()
      return result  
}

export async function createCourse({courseDescription, courseTitle, coursePriority, department}) {
    const data = {course: {course_title: courseTitle, course_priority: coursePriority, course_description: courseDescription, department}}
    const {token} = JSON.parse(localStorage.getItem('user')) || '' 

    const res = await fetch(`${baseUrl}/courses`, {
        method: 'POST',
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json', 
         },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)
      }
      const result = await res.json()
      return result 
}

export async function editCourse({courseDescription, courseTitle, coursePriority, department, courseId}) {
    const data = {course: {course_title: courseTitle, course_priority: coursePriority, course_description: courseDescription, department}}
    const {token} = JSON.parse(localStorage.getItem('user')) || '' 

    const res = await fetch(`${baseUrl}/courses/${courseId}`, {
        method: 'PUT',
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json', 
         },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)
      }
      const result = await res.json()
      return result 
}

export async function deleteCourse(id) {
    const {token} = JSON.parse(localStorage.getItem('user')) || '' 

    const res = await fetch(`${baseUrl}/courses/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json', 
         }
    })
    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)

      }
      const result = await res.json()
      return result
}