import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useGetSingleScore = () => {
  const params = useParams();

  const { id } = params;

  return useQuery({
    queryKey: ["score", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://pmfscore-backend-production.up.railway.app/api/v1/score/${id}`
      );

      const { data } = response;

      return data;
    },
    enabled: !!id,
  });
};
