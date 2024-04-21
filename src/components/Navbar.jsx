import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-4"></div>
      <div className="flex flex-row text-xl text-slate-300 font-serif">
        <div className="w-4/6 bg-line-900 pl-4"> Profile</div>
        {/* <button className='w-44 ' type='submit'>Role</button> */}
        <select className="bg-[#17092d]">
          <option value="Music">Music</option>
          <option value="Movie">Movie</option>
          <option value="Book">Book</option>
          <option value=" Article">Article</option>
        </select>
        <button
          className="w-44"
          type="submit"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
        <button type="submit">Login</button>
      </div>
    </>
  );
};

export default Navbar;
