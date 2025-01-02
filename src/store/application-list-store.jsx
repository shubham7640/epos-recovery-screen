import { createContext, useReducer } from "react";

export const AppList = createContext({
  appList: [],
  updateApplication: () => {},
});

const appListReducer = (currAppList, action) => {
  let newAppList = currAppList;
  if (action.type === "CREATE_POST") {
    newAppList = [action.payload, ...currAppList];
  } else if (action.type === "DELETE_POST") {
    newAppList = currAppList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "UPDATE_POST") {
    newAppList = currAppList.filter(
      (post) => post.id !== action.payload.postId
    );
    let newPost = currAppList.find((post) => post.id === action.payload.postId);
    newPost.reaction = action.payload.reaction;

    newAppList = [newPost, ...newAppList];
  }
  return newAppList;
};

const AppListProvider = ({ children }) => {
  const [appList, dispatchAppList] = useReducer(
    appListReducer,
    DEFAULT_APP_LIST
  );

  
  return (
    <AppList.Provider
      value={{
        appList: appList,
      }}
    >
      {children}
    </AppList.Provider>
  );
};
const DEFAULT_APP_LIST = [
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

export default AppListProvider;
