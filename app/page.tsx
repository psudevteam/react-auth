"use client";
import { Button, TextField } from "@/components"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useState } from "react";

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
  password: z.string().min(1, { message: 'Password harus diisi' }),
  remember: z.boolean().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function Home() {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: ""
    }
  })

   const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      await signIn("login", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      setLoading(false)
      push("/about")
    } catch(e) {
      setLoading(false)
      console.log(e)
    }
  });

return (
<section className="bg-gray-50 dark:bg-gray-900 items-center flex justify-center w-full h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 w-full md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Silahkan Masuk ke akun Anda
        </h1>
        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6" action="#">
          <TextField label="Email" type="email" placeholder={"maulana@psu.org"} control={control} name="email" status={errors.email ? "error" : "none"} message={errors.email?.message} />
          <TextField label="Kata Sandi" type="password" placeholder={"Masukan Kata Sandi"} control={control} name="password" status={errors.password ? "error" : "none"} message={errors.password?.message} />
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Ingat Saya
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>
          <Button
            type="submit"
            disabled={!isValid}
            loading={loading}
            className="disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-600 disabled:border w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Masuk Sekarang
          </Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Belum punya akun? Daftar {" "}
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}
