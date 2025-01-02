import { useLoaderData } from "react-router";
import Todo from "./Todo";

export default function Todos() {
  const { data: todos } = useLoaderData();

  return (
    <div className="flex items-center justify-center min-h-screen">
      {todos && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lga">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id No
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Messages
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {todos?.map((todo) => (
              <Todo key={todo._id} todo={todo} />
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
