import { useEffect, useState, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: "http://127.0.0.1:8080/",
  realm: "myrealm",
  clientId: "myclient",
});

const UseAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    client
      .init({ onLoad: "login-required" })
      .then((res) => setIsLogin(res))
      .catch((error) => {
        console.error("Keycloak initialization error:", error);
      });
  }, []);

  return isLogin;
};

export default UseAuth;
