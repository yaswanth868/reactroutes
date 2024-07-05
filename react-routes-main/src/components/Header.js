import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="d-flex bg-light justify-content-center text-center">
      <Link className="mr-5 p-3 text-success" to="/even">
        Even
      </Link>
      <Link className="ml-5 p-3 text-success" to="/contact">
        Contacts
      </Link>
      <Link className="ml-5 p-3 text-success" to="/game">
        NumberGame
      </Link>
      <Link className="ml-5 p-3 text-success" to="/counter">
        Counter
      </Link>
    </div>
  );
}
