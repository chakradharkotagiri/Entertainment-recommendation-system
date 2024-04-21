import React from "react";

const Search = () => {
  return (
    <form className="form-inline my-2  ">
      <input
        className=" border-2 border-grey font-semibold placeholder-grey-500 rounded-lg h-[300px] w-[800px] pb-52 pl-5 bg-[#0b061d] rounder-lg"
        placeholder="Chat with AI"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0 bg-violet-900 mr-10 py-2 mt-6 rounded-xl text-white hover:bg-violet-900 transition ease-in-out ml-8 w-11/12 " type="submit">
        Go
      </button>
    </form>
  );
};

export default Search;
