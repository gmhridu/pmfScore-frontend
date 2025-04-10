/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// You can define generic types for your requests and responses
type RequestData = Record<string, any>;
type ResponseData = Record<string, any>;

export const useGenerateScore = <
  TRequestData extends RequestData,
  TResponseData extends ResponseData
>() => {
  const queryClient = useQueryClient();

  const mutation = useMutation<TResponseData, Error, TRequestData>({
    mutationFn: async (formData: TRequestData) => {
      const response = await axios.post(
        `https://pmfscore-backend-production.up.railway.app/api/v1/score`,
        formData
      );

      if (!response) {
        throw new Error("Failed to generate score");
      }

      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["score", data?._id] });
    },
  });

  return mutation;
};
