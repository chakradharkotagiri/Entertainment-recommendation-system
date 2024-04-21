import React from "react";
import Search from "./Search";

const Body = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center text-center ">
        <div className="w-9/12 pt-40 font-sans text-2xl text-white ">AI Music Recommender
            <div className="mx-32  text-sm mt-8 font-mono">
            An AI chatbot music recommender system suggests songs based on user queries or a specified song, providing tailored recommendations. It analyzes preferences, genres, and user interactions to deliver personalized music suggestions, enhancing the user's listening experience.
            </div>
            <div className=" mx-32 mt-[200px]">
            <Search />
            </div>
        </div>
      </div>
    </>
  );
};

export default Body;
