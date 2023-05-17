import { api } from "@/service"
import { TRegisterData, TRegisterPayload } from "./types"

export const registerRequest =  async (payload: TRegisterPayload): Promise<TRegisterData> => {
  const { data } = await api.post("/register", payload)
  return data
}

