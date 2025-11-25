import Search from "./Search";

const content = {
  Music:
    " An AI chatbot music recommender system suggests songs based on user\
  queries or a specified song, providing tailored recommendations. It\
  analyzes preferences, genres, and user interactions to deliver\
  personalized music suggestions, enhancing the user's listening\
  experience.",
  Movie: "An AI chatbot movie recommender system suggests movies based on user interest .This is a personalized movie recommendation platform. Just share your preferences and interests, and let us guide you to the perfect movie choices. Enhance your movie-watching experience with tailored suggestions curated just for you.",
  Book: "An AI chatbot book recommender system suggests books based on user interest .  Discover your next favorite read effortlessly by simply providing prompts. Our system utilizes advanced AI to analyze your preferences and interests, delivering personalized book recommendations tailored to your unique tastes. Elevate your reading experience with curated suggestions just for you." ,
  Article:
    "An AI chatbot article recommender system suggests articles based on user . xperience personalized article suggestions tailored to your interests and preferences. Simply provide prompts, and our system will generate curated recommendations, helping you discover relevant and engaging content suited to your unique reading preferences."
};

const Body = ({ contentType }) => {
  // console.log(contentType);
  return (
    <>
      <div className="w-full flex flex-row  justify-center text-center ">
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
