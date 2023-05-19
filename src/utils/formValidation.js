export const handleBlur = (event, setError, clearErrors) => {
  const { name, value } = event.target;
  if (value.trim() === "") {
    setError(name, { type: "required", message: `${name} is required` });
  } else if (value.length < 3) {
    setError(name, {
      type: "minLength",
      message: "Name must have at least 3 characters",
    });
  } else {
    clearErrors(name);
  }

  if (name === "email" && value.trim() !== "") {
    if (!value.includes("@")) {
      setError(name, {
        type: "pattern",
        message: "Invalid email format. Please enter a valid email.",
      });
    } else {
      clearErrors(name);
    }
  }

  if (name === "password" && value.trim() !== "") {
    if (value.length < 8) {
      setError(name, {
        type: "minLength",
        message: "Password must be at least 8 characters long",
      });
    } else {
      clearErrors(name);
    }
  }
};
