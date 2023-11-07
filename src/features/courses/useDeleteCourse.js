import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCourse as deleteCourseApi } from "../../services/apiCourses";
import { useNavigate } from "react-router-dom";

export function useDeleteCourse() {
  const queryClient = useQueryClient();
    const navigate = useNavigate()
  const { isLoading: isDeleting, mutate: deleteCourse } = useMutation({
    mutationFn: deleteCourseApi,
    onSuccess: () => {
      toast.success("Course successfully deleted");
      navigate('/courses')  
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCourse };
}
