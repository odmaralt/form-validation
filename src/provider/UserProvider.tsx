/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
// import usecontext createcontext
interface UserProviderType {
  user: boolean;
  token: string;
  userId: string;
}
// userprovidertype has the user and the token
// U.P.context creates context w/ brackets as type
export const UserProviderContext = createContext({} as UserProviderType);
// the provider takes props of children as reactreact node

export const UserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  // the props are equal to children
  const [user, setUser] = useState<boolean>(false);

  const [token, setToken] = useState<string>("testToken");
  const getCookie = () => {
    return Cookies.get("userToken");
  };
  const getUserId = () => {
    return Cookies.get("userId");
  };

  useEffect(() => {
    const userToken = getCookie() as string;
    setToken(userToken);
    setUser(true);
  }, []);

  // declare usestates for the user and token
  const value = {
    user,
    token,
    userId: getUserId() ?? "",
  };
  // declare value equal to user and token

  return (
    <UserProviderContext.Provider value={value}>
      {children}
    </UserProviderContext.Provider>
  );
  // return contetx.provider with children inside (value can be seen by children)
};
export const useUserProvider = () => useContext(UserProviderContext);
// useuserprovider is function that uses context and takes userprovidercontext
