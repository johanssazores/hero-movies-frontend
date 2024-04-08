const login = async (username: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    return data && data.token;
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
};

const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();
    return data && data.isValid;
  } catch (error) {
    console.error("Error verifying token:", error);
    return false;
  }
};

export { login, verifyToken };
