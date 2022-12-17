import Link from "next/link";
import { useEffect } from "react";

export default function GeneralNav() {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="">
        Festival Conductor
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="privacy" role="button">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
