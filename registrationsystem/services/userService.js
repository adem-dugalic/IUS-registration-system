/*
####################################################################
Decks services - here we will have exports for all the services used
for decks.

@services:
 - useDecks() - return all decks from the database, should return in
                format IDeck
@return 
        - useDecks() 
@edited Adem Dugalić
####################################################################
*/
import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { httpClient } from "../utilities/httpClient";
import React from "react";

export function useUsers() {
  //Unable to use infinite query for some reason than it does not pass the interface corrcetly and it can not be read
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
    "users",
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
export function useDeleteDeck(deckId) {
  return (
    useMutation < any,
    any,
    any >
      (async () => {
        const res = await httpClient.delete(`/api/games/deck/${deckId}`);
        return res;
      })
  );
}

//Edit deck
export function useEditDeck(deckId) {
  return (
    useMutation < any,
    any,
    any >
      (async (data) => {
        const res = await httpClient.put(`/api/games/deck/${deckId}`, data);
        return res;
      })
  );
}
