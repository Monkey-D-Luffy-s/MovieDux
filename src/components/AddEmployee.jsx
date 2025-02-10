import React, { useState } from "react";
import axios from "axios";

function AddEmployee() {
  const [employe, setEmploye] = useState({
    name: "",
    description: "",
    phone: "",
    employeeid: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const onChangeInput = (id, e) => {
    setEmploye((prev) => {
      return { ...prev, [id]: e.target.value };
    });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const employeBody = {
      EmployeeId: parseInt(employe.employeeid),
      Name: employe.name,
      Description: employe.description,
      Phone: employe.phone,
    };

    console.log(employeBody);
    try {
      const response = await axios.post(
        "https://localhost:7175/Add",
        employeBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setError("Somthing went wrong");
        throw new Error("Failed to submit form");
      } else {
        setIsLoading(false);
        setSuccessMessage("Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      <p className="text-purple-500 text-md">Add new employee</p>
      <form
        className="w-[84%] border-[0.5px] border-purple-500 px-10 py-4"
        onSubmit={(e) => onFormSubmit(e)}
      >
        <div className="flex gap-3 my-2 justify-between text-center">
          <lable className="text-white text-md">Name:</lable>
          <input
            name="name"
            type="text"
            value={employe.name}
            onChange={(e) => onChangeInput("name", e)}
            className="bg-gray-800 w-[64%] px-2 py-1 outline-none border-[0.5px] focus:border-purple-500 text-white focus:text-purple-500 focus:bg-zinc-800"
          />
        </div>
        <div className="flex gap-3 my-2 justify-between text-center">
          <lable className="text-white text-md">EmployeeId:</lable>
          <input
            name="employeeid"
            type="number"
            value={employe.employeeid}
            onChange={(e) => onChangeInput("employeeid", e)}
            className="bg-gray-800  w-[64%] px-2 py-1 outline-none border-[0.5px] focus:border-purple-500 text-white focus:text-purple-500 focus:bg-zinc-800"
          />
        </div>
        <div className="flex gap-3 my-2 justify-between text-center">
          <lable className="text-white text-md">Description:</lable>
          <input
            name="description"
            type="text"
            value={employe.description}
            onChange={(e) => onChangeInput("description", e)}
            className="bg-gray-800 w-[64%] px-2 py-1 outline-none border-[0.5px] focus:border-purple-500 text-white focus:text-purple-500 focus:bg-zinc-800"
          />
        </div>
        <div className="flex gap-3 my-2 justify-between text-center">
          <lable className="text-white text-md">Phone:</lable>
          <input
            name="phone"
            type="number"
            value={employe.phone}
            onChange={(e) => onChangeInput("phone", e)}
            className="bg-gray-800 w-[64%] px-2 py-1 outline-none border-[0.5px] focus:border-purple-500 text-white focus:text-purple-500 focus:bg-zinc-800"
          />
        </div>
        <div className="flex gap-3  mt-4 justify-center  text-center">
          <button
            type="submit"
            className="px-10 py-2 bg-inherit outline-none border-[0.5px] border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-inherit "
          >
            Add
          </button>
        </div>
      </form>
      {isLoading && (
        <div>
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      {successMessage && (
        <div>
          <p className="text-green-500">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default AddEmployee;
