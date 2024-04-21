import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Search = ({ contentType }) => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const handleSubmit = async () => {
    try {
      console.log(prompt, contentType);
      const data = {
        prompt,
        contentType,
      };
      //make an api call with this prompt
      const response = await axios.post(
        "http://localhost:5000/api/recommendation/generate",
        data
      );
      console.log(response);
      setResult(response.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-16 h-screen mx-auto w-[80%] flex flex-col items-center">
      <textarea
        className=" border-2 border-grey font-semibold placeholder-grey-500 rounded-lg w-full min-h-[250px] p-5 bg-[#0b061d] rounder-lg resize-none"
        placeholder="Chat with AI"
        aria-label="Search"
        rows={7}
        cols={7}
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0 bg-violet-900 mr-10 py-2 mt-6 rounded-xl text-white hover:bg-violet-900 transition ease-in-out ml-8 w-full "
        onClick={() => {
          if (prompt.length > 0) {
            handleSubmit();
          } else {
            toast.error("Please specify your requirements");
          }
        }}
      >
        Go
      </button>
      {result}
    </div>
  );
};

export default Search;
