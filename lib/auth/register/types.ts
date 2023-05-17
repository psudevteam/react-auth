export type TRegisterPayload = {
  name: string
  email: string
  password: string
}

export type TUserItem = {
  id: number
  name: string
  email: string
}

export type TRegisterData = {
  message: string
  user: TUserItem
}
