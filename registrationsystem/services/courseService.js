import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { httpClient } from "../utilities/httpClient";

export function useCourses() {
  return useQuery(
    "courses",
    async () => {
      const { data } = await httpClient.get("/courses");
      return data || [];
    },
    {
      onSuccess() {
        console.log("succesfully got courses");
      },
      //We can use this option to refetch for any number og miliseconds
      //But keep in mind that it will refetch non stop in that set interval
      //refetchInterval: 1000,
    }
  );
}

export function useGetCourse(userID) {
  //Unable to use infinite query for some reason than it does not pass the interface corrcetly and it can not be read
  return useQuery(
    "course",
    async () => {
      const { data } = await httpClient.get(`/courses/${userID}`);
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
//New course
export function useCreateCourse() {
  return useMutation(async (data) => {
    const res = await httpClient.post("/courses", data);
    // console.log(data);
    return res;
  });
}

//Delete course
export function useDeleteCourse(userID) {
  return useMutation(async () => {
    const res = await httpClient.delete(`/courses/${userID}`);
    return res;
  });
}

//Edit course
export function useEditCourses(userID) {
  return useMutation(async (data) => {
    const res = await httpClient.put(`/courses/${userID}`, data);
    return res;
  });
}
