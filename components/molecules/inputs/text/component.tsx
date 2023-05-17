import { FieldValues, useController } from "react-hook-form"
import { TTextFieldProps } from "./types"
import { clsx } from "clsx"

export const TextField = <T extends FieldValues>({
  type = 'text',
  status = 'none',
  ...props
}: TTextFieldProps<T>) =>  {

  const inputClassName = clsx("sm:text-sm rounded-lg block w-full p-2.5",
    {
      "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600" : status === "none",
      "bg-red-50 border border-red-300 text-red-900 focus:ring-red-600 focus:border-red-600" : status === "error",
      "bg-green-50 border border-green-300 text-green-900 focus:ring-red-600 focus:border-red-600" : status === "success",
      "bg-yellow-50 border border-yellow-300 text-yellow-900 focus:ring-yellow-600 focus:border-yellow-600" : status === "warning"
    }
  )

  const messageClassName = clsx("text-sm w-full",
    {
      "hidden" : status === "none",
      "text-red-500" : status === "error",
      "text-green-500" : status === "success",
      "text-yellow-500" : status === "warning"
    }
  ) 

  const { field } = useController(props)

return (
  <div className="flex flex-col gap-y-2">
    <label
      htmlFor={props.name}
      className="block text-sm font-medium text-gray-900 dark:text-white"
    >
      {props.label}
    </label>
    <input
      {...{...field, ...props}}
      type={type}
      className={inputClassName}
    />
    <span className={messageClassName}>
      {props.message}
    </span>
  </div>
  )
}
