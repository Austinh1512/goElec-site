import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "../api/axios";

export default function PersistLogin() {
  const { user, setUser } = useContext(UserContext);

  return <Outlet />;
}
