import { createClient, useQuery } from "urql";
import { regs } from "@/graphql/queries/regulations";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";

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
      <Chevron className="m-4 h-16 w-16 fill-blue-500 transition duration-500 hover:rotate-180" />
    </div>
  );
}

export default App;
