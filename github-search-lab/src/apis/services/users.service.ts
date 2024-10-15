
import http from "../axios"

export const searchUser = (name :string) => {
    return http.get("/search/users?q="+name)
}