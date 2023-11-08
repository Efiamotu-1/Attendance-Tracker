import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReport as addReportApi} from "../../services/apiReports";
import toast from "react-hot-toast";


export function useAddReport() {
    const queryClient = useQueryClient()
    const {mutate: addReport, isLoading: isAdding} = useMutation({
    mutationFn: ({courseId, classDate, held, attended}) => addReportApi({courseId, classDate, held, attended}),
    onSuccess: () => {
        toast.success("Report Added Successfully")
        queryClient.invalidateQueries({ queryKey: ["reports"] })
        queryClient.invalidateQueries({ queryKey: ["courses"] })
    },
    onError: (err) => {
        toast.error(err.message)
    }
})
return {addReport, isAdding}
}