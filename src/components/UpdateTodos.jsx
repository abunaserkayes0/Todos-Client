import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "../../utils/Axios";

export default function UpdateTodos() {
  const { data: todo } = useLoaderData();
  const navigate = useNavigate();
  const { _id, title, message: msg } = todo || {};
  const [messages, setMessages] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const from = e.target;
    const formData = new FormData(from);
    const title = formData.get("title");
    const message = formData.get("message");

    const data = {
      title,
      message,
    };
    axios
      .put(`todos/${_id}`, data, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        const { modifiedCount } = response.data;
        if (modifiedCount > 0) {
          setMessages("Todos Update SuccessFully");
          setTimeout(() => {
            navigate("/todos");
          }, 2000);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Update Todo Apps
            </h1>
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Tittle of Todo"
                  defaultValue={title}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  rows="5"
                  color="35"
                  defaultValue={msg}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update Item
              </button>
            </form>
            {messages && (
              <p className="text-center text-xl font-bold">{messages}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
