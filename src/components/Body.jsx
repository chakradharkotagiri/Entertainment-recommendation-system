import Search from "./Search";

const content = {
  Music:
    " An AI chatbot music recommender system suggests songs based on user\
  queries or a specified song, providing tailored recommendations. It\
  analyzes preferences, genres, and user interactions to deliver\
  personalized music suggestions, enhancing the user's listening\
  experience.",
  Movie: "An AI chatbot movie recommender system suggests movies based on user",
  Book: "An AI chatbot book recommender system suggests books based on user",
  Article:
    "An AI chatbot article recommender system suggests articles based on user",
};

const Body = ({ contentType }) => {
  // console.log(contentType);
  return (
    <>
      <div className="w-full flex flex-row justify-center text-center ">
        <div className="w-9/12 pt-40 font-sans text-2xl text-white ">
          <div className="font-semibold text-3xl">
            AI {contentType} Recommender
          </div>
          <div className="mx-auto max-w-[70%] text-[15px] mt-8 font-mono">
            {content[contentType]}
          </div>
          <div className="mx-auto">
            <Search contentType={contentType} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
