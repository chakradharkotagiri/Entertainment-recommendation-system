import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const roles = ["Music", "Movie", "Book", "Article"];

const Navbar = ({ contentType, setContentType }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState("Music");
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(value);

  let domNode = useClickOutside(() => {
    setShowDropdown(false);
  });

  const handleChange = (value) => {
    console.log(value);
    setValue(value);
    setContentType(value);
    setShowDropdown(false);
  };

  console.log(showDropdown);

  return (
    <div className="h-16 px-4 flex flex-row text-xl items-center justify-between text-slate-300 font-serif">
      <div
      onClick={()=> {navigate("/")}}
      className=" bg-line-900 "> Home</div>
    
      <div className="flex items-center">
        <div className="relative bg-line-900 pl-4" ref={domNode}>
          <div
            className="cursor-pointer"
            onClick={() => {
              setShowDropdown((prev) => {
                return !prev;
              });
            }}
          >
            {value}
          </div>
          <div
            className={`${
              showDropdown ? "" : "hidden"
            } absolute w-30 left-0 rounded bg-[#a251ff7d]`}
          >
            {roles.map((role, index) => {
              return (
                <div
                  key={index}
                  className="w-[100px] z-50  px-2 text-[16px] flex flex-col gap-4 rounded hover:bg-[#6d72cb7d]"
                  type="submit"
                  onClick={() => {
                    console.log(role);
                    handleChange(role);
                  }}
                >
                  {role}
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="w-44"
          type="submit"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
        <button onClick={() => {
            navigate("/login");
          }} type="submit">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
