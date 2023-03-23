import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../utils/routing";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";

export const Main = () => {
  const dispatch = useDispatch();
  const ReducX_State = useSelector((state) => state);
  console.log("Redux-State====>", ReducX_State);
  const state = useSelector((state) => state.auth.stateChange);
  console.log("MainState", state);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRoute(state);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
