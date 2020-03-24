import React from 'react';
import {Header} from "./componnents/Header";
import {Balance} from "./componnents/Balance";
import {IncomeExpenses} from "./componnents/IncomeExpenses";
import {TransactionList} from "./componnents/TransactionList";
import {AddTransaction} from "./componnents/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

import "./App.css"

function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className="container">
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}
///its work
export default App;
