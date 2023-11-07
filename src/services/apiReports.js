import { baseUrl} from "./railsUrl"

export async function getReports() {
    const {token} = JSON.parse(localStorage.getItem('user'))

    const res = await fetch(`${baseUrl}/attendance`, {
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

export async function addReport({courseId, classDate, held, attended}) {
    const data = {attendance: {course_id: courseId, class_date: classDate, class_held: held === true ? 1 : 0, class_attended: attended === true ? 1 : 0}}
    const {token} = JSON.parse(localStorage.getItem('user'))

    const res = await fetch(`${baseUrl}/attendance`, {
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