import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";

function Employees() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [AddEmp, setAddEmp] = useState(false);
  useEffect(() => {
    fetch("https://localhost:7175/List")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Update the state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error); // Handle any errors
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div className="flex justify-center flex-col mb-4 gap-4">
      <div className="flex justify-between mx-10">
        <p className="text-blue-800 text-xl font-bold">Employees</p>
        <button
          className="px-2 py-1 text-teal-500 bg-inherit outline-none border-[0.5px] border-teal-500 hover:text-indigo-500 hover:border-indigo-500"
          onClick={() => setAddEmp((prev) => !prev)}
        >
          Add new Employee
        </button>
      </div>
      {AddEmp && <AddEmployee />}
      {loading && (
        <div>
          <div class="flex justify-center items-center min-h-screen">
            <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((emp) => (
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  key={emp.employeeid}
                >
                  <td class="px-6 py-4">{emp.id}</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {emp.name}
                  </th>
                  <td class="px-6 py-4">{emp.description}</td>
                  <td class="px-6 py-4">{emp.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
