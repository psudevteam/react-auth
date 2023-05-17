"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Fragment } from "react"

const AboutPage = () => {
  const { data:session } = useSession()
  const { push } = useRouter()
  return (
    <Fragment>
      <h1 className="text-blue-500 font-semibold text-5xl">
        Your Authenticated as {session?.user?.name}
      </h1>
      <span onClick={() => {
        signOut()
        push("/")
      } 
      }>Logout</span>
      </Fragment>
  )
}

export default AboutPage
