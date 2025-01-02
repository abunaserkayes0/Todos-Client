import { Link, useLoaderData } from "react-router";
import axios from "../../utils/Axios";
import { useState } from "react";

export default function Todo({ todo }) {
  const { _id, title, message } = todo || {};
  const { data: todos } = useLoaderData();
  const [updatedTodos, setUpdatedTodos] = useState(todos);

  const handelDelete = (id) => {
    axios
      .delete(`/todos/${id}`)
      .then((response) => {
        const { deleteCount } = response.data;
        if (deleteCount > 0) {
          const restTodos = updatedTodos.filter(
            (updatedTodo) => updatedTodo._id !== id
          );

          setUpdatedTodos(restTodos);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{_id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td className="px-6 py-4">{message}</td>

        <td className="px-6 py-4">
          <Link
            to={`/edit/${_id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
        </td>
        <td>
          <Link
            onClick={() => handelDelete(_id)}
            className="font-medium text-red-600 dark:text-blue-500 hover:underline"
          >
            Remove
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
