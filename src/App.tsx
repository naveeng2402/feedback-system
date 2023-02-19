import { createClient, useQuery } from "urql";
import { regs } from "@/graphql/queries/regulations";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";
import { AuthContext, type IAuthContext } from "@/context/auth";
import { useContext } from "react";

import Button from "@ui/Button";

function App() {
  const { auth, signIn, signOut } = useContext(AuthContext) as IAuthContext;

  const [result, reExecuteQuery] = useQuery({
    query: regs,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div className="mx-auto my-8 w-fit space-y-4">
      {result.data?.regulationsCollection?.edges.map((elem, idx) => (
        <p key={elem.node.id}>{elem.node.reg}</p>
      ))}

      <div className="space-x-4">
        <Button
          content="SignIn"
          clickAction={() => signIn("naveeng2402@gmail.com", "asdf1234")}
        />
        <Button content="SignOut" clickAction={signOut} />
      </div>
      <Chevron className="m-4 h-16 w-16 fill-blue-500 transition duration-500 hover:rotate-180" />
    </div>
  );
}

export default App;
