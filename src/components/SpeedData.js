import React from 'react'

/**
 * Renders a list of speed insights with their corresponding values.
 * 
 * @param {Object} speedInsights - An object containing speed insights data.
 * @param {Function} formatKey - A function used to format the keys of the speed insights.
 * @returns {JSX.Element} - The rendered JSX elements representing the speed insights.
 */
const SpeedData = ({ speedInsights, formatKey}) => {
  return (
    <div className='mt-20'>
        <h1 className="text-4xl ml-[2rem] text-center font-sarif">Speed Insights</h1>
         
         <div className="flex flex-col flex-wrap items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
           {Object.keys(speedInsights).map((key,index) => (
             <div
               key={index}
               className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4"
             >
               <p className="text-gray-600 dark:text-white text-center">
                 <h1>  {formatKey(key)}: </h1>
                 <span className="text-lg font-bold text-indigo-500">
                 {(speedInsights[key])}ms
                 </span>
               </p>
             </div>
           ))}
         </div>
    </div>
  )
}

export default SpeedData
