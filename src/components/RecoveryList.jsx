import { useContext, useState } from "react";
import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import SearchBar from "./SearchBar";
import { ApplicationListData } from "./ApplicationListData";


const RecoveryList = ({ selectedTab}) => {



const [applicationList, setApplicationList] = useState(ApplicationListData.sort((a,b)=>a.applicationNo-b.applicationNo));
const [bulkAppList, setBulkAppList] = useState([]);
const [searchCategory, setSearchCategory] = useState("");

const updateApplication = (appNo) =>
{
  let newApplist = applicationList.filter(app=>app.applicationNo!==appNo);

  let newApp = applicationList.find(app => app.applicationNo===appNo);
  newApp.status = 7;
  newApplist = [newApp, ...newApplist];
  setApplicationList(newApplist);
}

const selectAllApplication = () =>
{
  setBulkAppList(applicationList.map(app => app.applicationNo));
}

const selectApplication = (appNo) =>
{
  let newBulkList = [appNo,...bulkAppList];

  setBulkAppList(newBulkList);
}

const bulkRecoveryApplication = (bulkRecoveryList) =>
{
  let newApplist = applicationList.filter(app=>bulkRecoveryList.includes(app.applicationNo));
  let oldApplist = applicationList.filter(app=>!bulkRecoveryList.includes(app.applicationNo));
  newApplist.forEach(app=> app.status=7);
  newApplist = [...newApplist,...oldApplist]
  setApplicationList(newApplist);

}

const searchApplication = (value) =>
{
  
  let newApplist = applicationList;
  if(searchCategory==="Application")
  {
    newApplist = applicationList.filter(app=>app.applicationNo===parseInt(value))
  }
  else{
    newApplist = applicationList.filter(app=>app.status===parseInt(value))
  }   
  
  setApplicationList(newApplist);
}

  return (
    <>
      <SearchBar setSearchCategory = {setSearchCategory} searchApplication = {searchApplication}/>
      <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <ListHeader selectAllApplication ={selectAllApplication} bulkAppList ={bulkAppList}/>
          <ListItems applications={applicationList} updateApplication = {updateApplication} selectApplication = {selectApplication} bulkAppList = {bulkAppList}/>
        </table>
        <br/>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => bulkRecoveryApplication(bulkAppList)}
        >Bulk Recovery</button>
      </div>
    </>
  );
};
export default RecoveryList;
