import React from "react";
import { useState } from "react";
import axios from "axios";
import Data from "./Data";
import { Puff } from "react-loader-spinner";


/**
 * Renders a search form and handles the submission of the form. Makes an API request to retrieve SEO data for a given URL and displays the results using the `Data` component.
 *
 * @component
 * @example
 * <Search />
 *
 * @returns {JSX.Element} The rendered search form and search results.
 */
const Search = () => {
  const [url, setUrl] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const headingText = apiResponse === null ? "Get Free SEO Report." : `Results for ${url}`;
  const h1class = apiResponse === null ? "text-center mt-8 text-5xl font-poppins" : "text-center mt-8 text-3xl font-poppins";

  // HandleSubmit function handles the form submmision and call the api to get the data.
  const handleSubmit = async (e) => {
    e.preventDefault();


    const requestData = [
      {
        url: url, 
        enable_javascript: true,
        check_spell: false,
      },
    ];

    const apiUrl = "https://api.dataforseo.com/v3/on_page/instant_pages";
    const headers = {
      Authorization:
        "Basic aGltYW5zaHUubWlzaHJhLjExMDZAZ21haWwuY29tOjNjODZkZDQ3ZDRlNWIxYzI=",
      "Content-Type": "application/json",
    };

    setLoading(true);

    try {
      const response = await axios.post(apiUrl, requestData, { headers });
      setLoading(false);
      setApiResponse(response.data);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.error("API request error:", error);
    }
  };
  const percentage = 92;

  return (
    <div className="font-poppins">
      <h1 className={h1class}>{headingText}</h1>
      <hr className="mt-4" />
      {apiResponse === null && (
        <form
          action=""
          className="absolute left-5 md:left-[35%] top-[18%]"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            className="w-[350px] md:w-[400px] h-[40px] border-2 border-gray-300 rounded-md font-poppins px-2 text-sm"
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder="Enter the Url like this (https://www.youtube.com/)"
          />
          <button
            type="submit"
            className="py-2 px-4 ml-[8rem] md:ml-4 w-[100px] mt-4 md:mt-[0] bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Search
          </button>
        </form>
      )}
      {loading && (
        <div className="absolute top-[30%] left-[45%]">
          <Puff
            height="100"
            width="100"
            radius="9"
            color="#05082b"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      {apiResponse !== null && <Data apiResponse={apiResponse} />}
    </div>
  );
};
export default Search;
