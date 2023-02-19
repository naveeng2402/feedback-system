import { createClient, useQuery } from "urql";
import { regs } from "@/graphql/queries/regulations";
import Dropdown from "@ui/Dropdown";
import Button from "@ui/Button";
import SignUp from "@/pages/SignUp";
import Input from "@ui/Input";
import { useState } from "react";

function App() {
  const people = [
    { id: 1, name: "1" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  const [selectedValue, setSelectedValue] = useState(people[0]);
  return (
    <div className="w-80">
      {/* <SignUp /> */}
      <Dropdown
        value={selectedValue}
        setValue={setSelectedValue}
        options={people}
      />
    </div>
  );
}

export default App;
