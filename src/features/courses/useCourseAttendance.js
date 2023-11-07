import { useQuery } from "@tanstack/react-query"
import { getCourseAttendance } from "../../services/apiCourses"
import { useParams } from "react-router-dom"

export function useCourseAttendance() {
    const {courseId} = useParams()

    const {isLoading, data: courseAttendance, error} = useQuery({
        queryKey: ['courseAttendance', courseId],
        queryFn: () => getCourseAttendance(courseId),
    })

    return {isLoading, courseAttendance, error}
}