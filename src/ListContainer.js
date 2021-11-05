import React from "react";
import data from "../src/data";
import ListItem from "./ListItem";

const ListContainer = () => {
  const [persons, setPersons] = React.useState(data);
  const clearList = () => {
    console.log("yeah its clicked");
    setPersons([]);
  };
  return (
    <>
      <h3> {persons.length} birtdays today</h3>
      <ListItem pass={persons} />
      <button onClick={clearList}>Clear</button>
    </>
  );
};

export default ListContainer;
