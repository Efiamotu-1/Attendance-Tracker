import { useQuery } from "@tanstack/react-query";
import { getUsersCount } from "../../services/apiAuth";

export function useUsersCount() {
    const {isLoading, data: usersCount} = useQuery({
        queryKey: ['users-count'],
        queryFn: () => getUsersCount()
    })

    return {isLoading, usersCount}
} 