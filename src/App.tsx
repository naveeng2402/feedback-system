import { createClient, useQuery } from "urql";
import { regs } from "@/graphql/queries/regulations";

function App() {
  const [result, reExecuteQuery] = useQuery({
    query: regs,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      {result.data?.regulationsCollection?.edges.map((elem, idx) => (
        <p key={elem.node.id}>{elem.node.reg}</p>
      ))}
    </div>
  );
}

export default App;
