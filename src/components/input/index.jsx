const Input = ({ type, id, name, placeholder, register, message }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className="border-2 border-black outline-none w-[70vw] h-10 pl-[2vw] md:w-[40vw] md:h-9 xl:w-[30vw]"
        placeholder={placeholder}
        {...register(name, { required: message })}
        required
      />
    </>
  );
};

export default Input;
