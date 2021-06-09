import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { httpClient } from "../utilities/httpClient";

export function useUsers() {
  return useQuery(
    "users",
    async () => {
      const { data } = await httpClient.get("/users");
      return data || [];
    },
    {
      onSuccess() {
        console.log("succesfully got users");
      },
      //We can use this option to refetch for any number og miliseconds
      //But keep in mind that it will refetch non stop in that set interval
      //refetchInterval: 1000,
    }
  );
}

export function useGetUser(userID) {
  //Unable to use infinite query for some reason than it does not pass the interface corrcetly and it can not be read
  return useQuery(
    "user",
    async () => {
      const { data } = await httpClient.get(`/users/${userID}`);
      return data;
    },
    {
      onSuccess() {
        console.log("succesfully got users");
      },
      //We can use this option to refetch for any number og miliseconds
      //But keep in mind that it will refetch non stop in that set interval
      //refetchInterval: 1000,
    }
  );
}
//New user
export function useCreateUser() {
  return useMutation(async (data) => {
    const res = await httpClient.post("/users", data);
    // console.log(data);
    return res;
  });
}

//Delete Deck
export function useDeleteUser(userID) {
  return useMutation(async () => {
    const res = await httpClient.delete(`/users/${userID}`);
    return res;
  });
}

//Edit deck
export function useEditUser(userID) {
  return useMutation(async (data) => {
    const res = await httpClient.put(`/users/${userID}`, data);
    return res;
  });
}
