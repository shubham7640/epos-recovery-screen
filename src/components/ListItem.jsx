import { useState } from "react";
import PopUp from "./PopUp";

const ListItem = ({ application,updateApplication, selectApplication, bulkAppList }) => {

  const buttonListData = [
    {
      text: 'Copy Application Number',
      buttonFunction: () => {alert('hello')}
    },
    // {
    //   text: 'Copy Application Number',
    //   buttonFunction: () => {alert('hello')}
    // },
    // {
    //   text: 'Copy Application Number',
    //   buttonFunction: () => {alert('hello')}
    // }

  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState("SUCCESS");
  const [details, setDetails] = useState("THIS IS TEST DATA");
  const [buttonList, setButtonList] = useState (buttonListData);



  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={()=> selectApplication(application.applicationNo)}
              disabled = {application.status >= 7 }
              checked = {bulkAppList.includes(application.applicationNo)}
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {application.applicationNo}
        </th>
        <td className="px-6 py-4">{application.creationDate}</td>
        <td className="px-6 py-4">
          {application.agentName}, {application.channel == 1 ? "MGA" : "PA"}
        </td>
        <td className="px-6 py-4">
          {application.productName}, ${application.premium}(
          {application.premiumCurrency})
          <br /> {application.payYears} Years
          <br /> ...
        </td>
        <td className="px-6 py-4">
          {(application.status >= 7 && (
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-3 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Recovered
            </span>
          )) ||
            (application.status == 5 && (
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-5 py-1 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
                Failed
              </span>
            )) ||
            (application.status == 4 && (
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2 py-1 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
                Incomplete
              </span>
            ))}
        </td>
        <td className="px-6 py-4">
          {application.status <= 6 ? (
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={() => 
                togglePopup()
                
                }
            >
              Recover
            </a>
          ) : (
            <></>
          )}
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
            onClick={() => alert('This feature is under development')}
          >
            Copy JSON
          </a>
        </td>
      </tr>
      {isPopupOpen && <PopUp title= {title} details={details} togglePopup = {togglePopup} buttonList = {buttonList}></PopUp>}
    </>
  );
};

export default ListItem;
