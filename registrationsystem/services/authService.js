import { useMutation } from "react-query";
import { httpClient } from "../utilities/httpClient";

export const useLogin = () => {
  return useMutation(
    async (loginData) =>
      await httpClient.post("api/authentication/login", loginData),
    {
      onSuccess: () => {
        // cache.invalidateQueries('loginUser')
      },
      // onError: (err, variables, recover) =>
      //   typeof recover === 'function' ? recover() : null,
      // throwOnError: true
    }
  );
};

export const useRegister = () => {
  return useMutation(
    async (data) => await httpClient.post("api/authentication/signup", data),
    {
      onSuccess: () => {
        // cache.invalidateQueries('loginUser')
      },
      // onError: (err, variables, recover) =>
      //   typeof recover === 'function' ? recover() : null,
      // throwOnError: true
    }
  );
};
