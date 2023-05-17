import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { TRegisterData, TRegisterPayload } from "./types"
import { registerRequest } from "./api"

export const useRegister = (): UseMutationResult<TRegisterData, unknown, TRegisterPayload, unknown> => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (payload) => await registerRequest(payload)
  })
}
