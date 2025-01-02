import "./App.css";

import RecoveryList from "./components/RecoveryList";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import Header from "./components/Header";
import AppListProvider from "./store/application-list-store";

function App() {

  const [selectedTab, setSelectedTab] = useState("PDF");

  return (
    <AppListProvider>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-900">

          <Header selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}/>
        
        <RecoveryList selectedTab={selectedTab}/>
      </div>
    </AppListProvider>
  );
}

export default App;
