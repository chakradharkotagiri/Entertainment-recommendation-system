import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Search = ({ contentType }) => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // NEW

  const backendLocal = "http://localhost:5001/api/recommendation/generate";

  const handleSubmit = async () => {
    try {
      setLoading(true); // disable button
      setResult(""); // clear old result

      const data = { prompt, contentType };
      const response = await axios.post(backendLocal, data);

      setResult(response.data.message);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // enable button again
    }
  };

  return (
    <div className="mt-16 h-screen mx-auto w-[80%] overflow-y-scroll no-scrollbar flex flex-col items-center">
      <textarea
        className="border-2 border-grey font-semibold outline-none placeholder-grey-500 rounded-lg overflow-y-scroll no-scrollbar   w-full min-h-[150px] p-5 bg-[#0b061d] resize-none text-white"
        placeholder="Chat with AI"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className={`my-2 py-2 mt-6 rounded-xl text-white w-full transition 
          ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-violet-900 hover:bg-violet-800"
          }`}
        onClick={() => {
          if (prompt.length > 0) handleSubmit();
          else toast.error("Please specify your requirements");
        }}
        disabled={loading} // DISABLE BUTTON HERE
      >
        {loading ? "Loading..." : "Go"} {/* CHANGE TEXT WHILE LOADING */}
      </button>

      <div className="text-white mt-4 w-[100%] whitespace-pre-wrap">
        {result && (
          <div
            className="w-full mt-4 p-4 bg-[#1a112f] text-white rounded-lg 
               whitespace-pre-wrap overflow-y-auto no-scrollbar"
            style={{ maxHeight: "700px",}} // auto-expand up to 300px
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
