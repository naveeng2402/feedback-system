import { createClient, useQuery } from "urql";
import { regs } from "@/graphql/queries/regulations";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";
import { AuthContext, type IAuthContext } from "@/context/auth";
import { useContext, useState } from "react";

import Button from "@ui/Button";

function App() {
  const { auth, signIn, signOut } = useContext(AuthContext) as IAuthContext;

  const [result, reExecuteQuery] = useQuery({
    query: regs,
  });

  return (
    <div className="mx-auto my-12 w-fit">
      <div className="space-y-2">
        {result.data?.regulationsCollection?.edges.map((elem, idx) => (
          <p key={elem.node.id}>{elem.node.reg}</p>
        ))}
      </div>
      <div className="m-4 flex gap-6">
        <Button onClick={() => signIn("naveeng2404@gmail.com", "pass1234")}>
          <p>Sign In</p>
          <Chevron className="h-6  w-6 translate-y-0.5 fill-white transition duration-500 hover:rotate-180" />
        </Button>
        <Button onClick={signOut} intent="inactive" className="group">
          <p>Sign Out</p>
          <Chevron className="h-6 w-6 translate-y-0.5 transition duration-200 group-hover:rotate-180" />
        </Button>
        <Button size="circle" className="group p-2">
          <Chevron className="h-8 w-8 translate-y-[10%] transition group-hover:rotate-180" />
        </Button>
      </div>
    </div>
  );
}

export default App;
