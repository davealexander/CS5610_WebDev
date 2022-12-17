import { useEffect } from "react";
import style from "./headerbar.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

//Headerbar that pulls in the username of the authenticated user
//and reassures login
export default function Headerbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-end">
          <div className={style.headerTitle}>
            <h3 className={style.headerTitle}>{"Hello " + user.nickname}</h3>
            <div class="collapse navbar-collapse" id="navbarNav"></div>
          </div>
        </nav>
      </>
    )
  );
}
