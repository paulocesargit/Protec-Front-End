import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (children) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.find(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password, userType) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.find(
      (user) => user.email === email && user.type === userType
    );

    if (hasUser) {
      if (hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem(
          "user_token",
          JSON.stringify({ email, token, type: userType })
        );
        setUser({ email, password, type: userType });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
