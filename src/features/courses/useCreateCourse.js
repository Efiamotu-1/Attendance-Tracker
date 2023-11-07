import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCourse as createCourseApi } from "../../services/apiCourses";

export function useCreateCourse() {
  const queryClient = useQueryClient();


    const {mutate: createCourse, isLoading: isCreating} = useMutation({
        mutationFn: ({courseDescription, courseTitle, coursePriority, department}) => createCourseApi({courseDescription, courseTitle, coursePriority, department}),
        onError: (err) => {
            toast.error(err.message);
          },
        onSuccess: () => {
            toast.success("Course Created Successfully");
            queryClient.invalidateQueries({ queryKey: ["courses"] });

        }  
    })

    return {createCourse, isCreating}
}