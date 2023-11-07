import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCourse as editCourseApi } from "../../services/apiCourses";

export function useEditCourse() {
  const queryClient = useQueryClient();


    const {mutate: editCourse, isLoading: isEditing} = useMutation({
        mutationFn: ({courseDescription, courseTitle, coursePriority, department, courseId}) => editCourseApi({courseDescription, courseTitle, coursePriority, department, courseId}),
        onError: (err) => {
            toast.error(err.message);
          },
        onSuccess: () => {
            toast.success("Course Edited Successfully");
            queryClient.invalidateQueries({ queryKey: ["course"] });

        }  
    })

    return {editCourse, isEditing}
}