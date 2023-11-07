import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCourse } from "../../services/apiCourses";

export function useCourse() {
    const {courseId} = useParams()

    const {isLoading, data: course, error} = useQuery({
        queryKey: ['course', courseId],
        queryFn: () => getCourse(courseId),
    })

    return {isLoading, course, error}
}