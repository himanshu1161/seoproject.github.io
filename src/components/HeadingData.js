import React from 'react'

/**
 * Renders a div element containing a list of headings (h1, h2, and h3) based on the data provided in the `htags` property of the parameter object.
 * @param {Object} param - The parameter object.
 * @param {Object} param.htags - The data for rendering the headings.
 * @returns {JSX.Element} - The rendered JSX code that represents the headings based on the `htags` data.
 */
const headingData = ({ htags }) => {

  // if block to handle if htags is not available.
  if (!htags) {
    return null;
  }
 
  // Function to render the H1 tags of website.
  const renderH1Tags = () => {
    if (!htags.h1) {
      return null;
    }

    return (
      <div className='pl-[20px] yexy-gray-500 text-2xl px-[10px]'>
        <span>H1 Tags:</span>
        {htags.h1.map((item, index) => (
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:gap-4 sm:px-6" key={index}>
            <dt className="text-sm font-medium text-gray-500">
              {item}
            </dt>
          </div>
        ))}
      </div>
    );
  };

  //Function to render the H2 tags of website.
  const renderH2Tags = () => {
    if (!htags.h2) {
      return null;
    }

    return (
      <>
        <span className='pl-[20px] yexy-gray-500 text-2xl px-[10px]'>H2 Tags:</span>
        {htags.h2.map((item, index) => (
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:gap-4 sm:px-6" key={index}>
            <dt className="text-sm font-medium text-gray-500">
              {index + 1}.{item}
            </dt>
          </div>
        ))}
      </>
    );
  };
  // Function to render the H3 tags of website.
  const renderH3Tags = () => {
    if (!htags.h3) {
      return null;
    }

    return (
      <>
        <span className='pl-[20px] yexy-gray-500 text-2xl px-[10px]'>H3 Tags:</span>
        {htags.h3.map((item, index) => (
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:gap-4 sm:px-6" key={index}>
            <dt className="text-sm font-medium text-gray-500">
              {index + 1}. {item}
            </dt>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className='mt-[2rem]'>
      <div className="max-w-4xl overflow-hidden bg-white shadow sm:rounded-lg ml-0 md:ml-[20rem] bg-white dark:bg-gray-800 text-white">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-3xl font-medium leading-6 text-white-900 text-center">
            H tags:
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {renderH1Tags()}
            {renderH2Tags()}
            {renderH3Tags()}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default headingData;
