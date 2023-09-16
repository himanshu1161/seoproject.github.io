import React from "react";
import HeadingData from "./HeadingData";
import SpeedData from "./SpeedData";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/**
 * Renders various data related to the webpage, including on-page results, headings, and speed insights.
 *
 * @param {Object} apiResponse - The API response object containing data about the webpage.
 * @returns {JSX.Element} - Rendered JSX representing the on-page results, content data, checks data, heading data, and speed insights data.
 */
const Data = ({ apiResponse }) => {

  // Filtering the data for mapping it into seprate components.
  const items = apiResponse?.tasks[0]?.result[0]?.items[0];
  const meta = items?.meta;
  const content = items?.meta.content;
  const checks = items?.checks;
  const htags = items?.meta?.htags;
  const speedInsights = items?.page_timing;
  const onPageScore = items?.onpage_score;

  // console.log("apiresp", apiResponse);
  // console.log("Links:", checks);

  // Formatting the raw data into specific array so it can be mapped easily.
  const onPageData = [
    { name: "Internal Links", value: meta?.internal_links_count },
    { name: "External Links", value: meta?.external_links_count },
    { name: "Number of Images", value: meta?.images_count },
    { name: "Scripts", value: meta?.scripts_count },
    { name: "Scripts Size", value: meta?.scripts_size },
  ];

  //formatkey function formats the key by removing the "_" and converting the key into uppercase 
  const formatKey = (key) => {
    const words = key.split("_");

    const formattedKey = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedKey;
  };

  //getSymbole function returns right or wrong symbol based on the boolean value.
  function getSymbol(value) {
    return value ? "✓" : "✗";
  }

  //getColorclassName function return the text color based on the boolean value
  function getColorclassName(value) {
    return value ? "text-green-500" : "text-red-500";
  }

  return (
    <div className="mt-[2rem]">
      <div className="w-[150px] h-[150px] relative left-[45%] bottom-[5%]">

        
          <CircularProgressbar value={onPageScore} text={`${onPageScore}%`}/>
          <span className="relative top-[6%] left-[3%] text-[19px] font-bold ">On-Page Score</span>
          </div>

       {speedInsights && (
        <SpeedData speedInsights={speedInsights} formatKey={formatKey} />
      )}
      <h1 className="text-4xl text-center">On Page Results</h1>

      <div className="flex  flex-wrap items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
        {onPageData?.map((values, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4"
          >
            <p className="text-gray-600 dark:text-white text-center">
              <h1>{values.name}</h1>
              <span className="text-lg font-bold text-indigo-500">
                {values.value !== null ? values.value.toFixed(2) : "N/A"}
              </span>
            </p>
          </div>
        ))}

        {content && (
          <>
            {Object.keys(content)?.map((key, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4"
              >
                <p className="text-gray-600 dark:text-white text-center">
                  <h1> {formatKey(key)}: </h1>
                  <span className="text-lg font-bold text-indigo-500">
                    {content[key] !== null && content[key] !== undefined
                      ? content[key].toFixed(2)
                      : "N/A"}{" "}
                  </span>
                </p>
              </div>
            ))}
          </>
        )}
      </div>

      <hr />
      {checks && (
        <div className="flex flex-col flex-wrap items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
          {Object.keys(checks).map((key, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4"
            >
              <p className="text-gray-600 dark:text-white text-center">
                <h1> {formatKey(key)}: </h1>
                <span
                  className={`text-lg font-bold text-indigo-500 ${getColorclassName(
                    checks[key]
                  )}`}
                >
                  {getSymbol(checks[key])}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      <hr />

      <HeadingData htags={htags} />
      <hr className="mt-[2rem]" />

     
    </div>
  );
};

export default Data;
