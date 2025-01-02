import ListItem from "./ListItem";

const ListItems = ({applications,updateApplication,selectApplication, bulkAppList}) => {
  return (
    <tbody>
      {applications.map((elem) => (
        <ListItem key = {elem.applicationNo} application={elem} updateApplication={updateApplication} selectApplication ={selectApplication} bulkAppList= {bulkAppList}></ListItem>
      ))}
    </tbody>
  );
};
export default ListItems;
