import axios from "axios"

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(axios.defaults.headers)
    return true
  } else {
    delete axios.defaults.headers.common["Authorization"];
    return false
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(
      "https://goauthjwt-production.up.railway.app/api/login",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const token = response.data.token.value;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);

  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const fetchProtectedData = async () => {
  const token = localStorage.getItem("jwtToken")
  if(!token){
    console.error("Token tidak ada")
  }
  try {
    const response = await axios.get(
      "https://goauthjwt-production.up.railway.app/api/user",
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    const getUser = await response.data.user.name
    return getUser;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const logout = async() => {
  const token = localStorage.getItem("jwtToken")
  try {
    if(token) {
      await axios.post("https://goauthjwt-production.up.railway.app/api/logout", {})
      localStorage.removeItem("jwtToken")
    } else{
      console.error("you are not login yet")
    }
  } catch (error) {
    console.error(error)
  }
}