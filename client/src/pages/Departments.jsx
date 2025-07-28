import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Departments() {
  const [Depts, setDepts] = useState([]);
  const [name, setName] = useState("");

  const getDepts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/dept/Departments`, {
        method: "GET",
      });
      const Results = await res.json();
      setDepts(Results.Data);
    } catch (err) {
      console.log("Err ", err);
    }
  };

  useEffect(() => {
    getDepts();
  }, []);

  const handleDelete = async (_id) => {
    try {
      let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/dept/Delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: _id }),
      });
      const data = await res.json();
      await getDepts();
    } catch (err) {
      console.log("Err:", err);
    }
  };

  const HandleAdd = async () => {
    if (!name) {
      alert("Department Name Cannot be Empty");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/dept/Add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
        }),
      });

      await getDepts();
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Departments</h2>
      </div>

      {/* To add dept section */}
      <div className=" w-full flex flex-col gap-y-5">
        <p>Add New Departmet</p>

        <div className="flex gap-x-5">
          <input
            className="bg-white border-2 border-gray-200 py-2 rounded-md  px-2 w-[50rem] focus:outline focus:outline-blue-500  focus:border-blue-500  "
            onChange={(e) => setName(e.target.value)}
          />
          <div
            className=" py-2 bg-black rounded-md w-[5rem]  text-white text-center cursor-pointer  "
            onClick={HandleAdd}
          >
            Add
          </div>
        </div>
      </div>

      {/* To Show all dept section */}

      <div className="my-10 ">
        <p className="mb-5">All Departments</p>

        <div className="flex flex-wrap  gap-3  ">
          {Depts?.map((dept, i) => (
            <div
              key={i}
              className=" bg-gray-50 border border-gray-200 flex items-center rounded-md gap-5 px-5 py-3"
            >
              <p>{dept.Name}</p>
              <X
                className="w-4 h-4 cursor-pointer"
                onClick={() => {
                  handleDelete(dept._id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
