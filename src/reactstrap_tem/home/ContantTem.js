import React from "react";
import FormInsert from "../form/FormInsert";
import { Route } from "react-router-dom";

const ContantTem = () => {


  return (
    <div className="mt-4">
        {/*  
      <h1>{JSON.stringify(accountList)}</h1>
      <form>
        <input
          type="text"
          value={account.name}
          onChange={(e) => {
            setData({ name: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setData({ name: "" });
          }}
        >
          Clear
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setDataList([...accountList, {...account ,index: accountList.length}]);
          }}
        >
          submit
        </button>
      </form>

      <li>
        {accountList.map((item) => (
          <div key={item.index}>ID: {item.index} Name: {item.name}</div>
          
        ))}
      </li>
*/}
      <Route path="/Form" component={FormInsert} />
    </div>
  );
}
export default ContantTem;
