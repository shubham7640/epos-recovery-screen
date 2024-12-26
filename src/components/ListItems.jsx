import ListItem from "./ListItem";
// status 4- incomplete, 5- failed 7- recovered
let applications = [
  {
    applicationNo: 1111111,
    creationDate: "Dec 13, 2024",
    agentName: "Sufomi Takashi",
    productName: "GASA",
    premium: 1000,
    premiumCurrency: "USD",
    payYears: 12,
    status: 4,
    channel: 1,
  },
  {
    applicationNo: 1111111,
    creationDate: "Dec 13, 2024",
    agentName: "Sufomi Takashi",
    productName: "GASA",
    premium: 1000,
    premiumCurrency: "USD",
    payYears: 12,
    status: 5,
    channel: 3,
  },
  {
    applicationNo: 1111111,
    creationDate: "Dec 13, 2024",
    agentName: "Sufomi Takashi",
    productName: "GASA",
    premium: 1000,
    premiumCurrency: "USD",
    payYears: 12,
    status: 7,
    channel: 1,
  },
];

const ListItems = () => {
  return (
    <tbody>
      {applications.map((elem) => (
        <ListItem application={elem}></ListItem>
      ))}
    </tbody>
  );
};
export default ListItems;
