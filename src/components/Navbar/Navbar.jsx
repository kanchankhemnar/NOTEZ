/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import {Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
const [searchQuery,setSearchQuery] =useState("");

const navigate = useNavigate();
  const onLogout = () =>{
      navigate("/login");
  };

  const handleSearch=()=>{

  };
  const onClearSearch=()=>{
    setSearchQuery("");
  }
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <Link to={"/dashboard"}>
        <h2 className="text-xl font-medium text-black py-2">TODO</h2>
        </Link>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <ProfileInfo onLogout={onLogout} />
      </div>
    </>
  );
};
export default Navbar;
