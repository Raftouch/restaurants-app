import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="font-serif fixed h-[100px] w-full bg-slate-600 text-white flex justify-between items-center px-5">
      <span className="max-w-[200px]">Restaurants App</span>
      <span>
        <Link to="/" className="mr-5 hover:text-slate-500">
          Home
        </Link>
        <Link to="/favourites" className="hover:text-slate-500">
          Favourites
        </Link>
      </span>
    </div>
  );
}
