import React, { useState } from "react";
import InputTextField from "../../components/InputText";
import DropdownMenu from "../../components/Dropdown";
import ErrorMessage from "../../components/ErrorMessage";

const InputPage = ({
  algorithm,
  setAlgorithm,
  setArrivalTimes,
  setBurstTimes,
  setPriorities,
  setQuantumTime,
  setShowOutput
}) => {
  const [error, setError] = useState(false);

  const handleSubmission = () => {
    const arrivalInput = document.getElementById("arrivalInput"),
      burstInput = document.getElementById("burstInput"),
      priorityInput = document.getElementById("priorityInput"),
      quantumInput = document.getElementById("quantumInput");
    let arrivalArray = [],
      burstArray = [],
      priorityArray = [],
      quantumValue = [];
    arrivalArray = arrivalInput?.value?.match(/\d+/g)?.map(Number);
    burstArray = burstInput?.value?.match(/\d+/g)?.map(Number);
    priorityArray = priorityInput?.value?.match(/\d+/g)?.map(Number);
    quantumValue = quantumInput?.value?.match(/\d+/g)?.map(Number) || [];

    // rest of your code...

    if (!arrivalArray || !burstArray || arrivalArray.length !== burstArray.length || (algorithm === "Priority Scheduling" && (!priorityArray || arrivalArray.length !== priorityArray.length)) || (algorithm === "Round Robin, RR" && (!quantumValue || quantumValue.length === 0 || quantumValue[0] <= 0 || quantumValue.length > 1))) {
      setError(true);
      setShowOutput(false);
      return;
    }


    if (!arrivalArray || !burstArray || arrivalArray.length !== burstArray.length || (algorithm === "Priority Scheduling" && (!priorityArray || arrivalArray.length !== priorityArray.length)) || (algorithm === "Round Robin, RR" && (!quantumValue || quantumValue[0] <= 0 || quantumValue.length > 1))) {
      setError(true);
      setShowOutput(false);
      return;
    }
    setError(false);
    setShowOutput(true);
    setArrivalTimes(arrivalArray);
    setBurstTimes(burstArray);
    setPriorities(priorityArray);
    setQuantumTime(quantumValue[0]);
  };

  return (
    <div className="mb-6 h-min px-6 py-6 w-3/4 flex flex-col justify-center items-center border-gray-100">
      <div className="flex gap-3 flex-row ">
      <DropdownMenu algorithm={algorithm} setAlgorithm={setAlgorithm} setShowOutput={setShowOutput} />
      <InputTextField
        setArrivalTimes={setArrivalTimes}
        title="Arrival Times"
        id="arrivalInput"
        placeholder="e.g. 0 3 5 12 4"
      />
      <InputTextField
        setBurstTimes={setBurstTimes}
        title="Burst Times"
        id="burstInput"
        placeholder="e.g. 3 6 10 12 1"
      />
      {algorithm === "Priority Scheduling" && (
        <InputTextField
          setPriorities={setPriorities}
          title="Priorities"
          id="priorityInput"
          placeholder="Lower no. = higher priority"
        />
      )}
      {algorithm === "Round Robin, RR" && (
        <InputTextField
          setQuantumTime={setQuantumTime}
          title="Time Quantum"
          id="quantumInput"
          placeholder="e.g. 4"
        />
      )}
      </div>
      <div className="mb-4 flex flex-col justify-center gap-3 items-center">
        {error && <ErrorMessage />}
        <button
          onClick={handleSubmission}
          className="bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-3 rounded"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default InputPage;
