import React from "react";
import { PS } from "../../components/Algorithms/PS";
import { RR } from "../../components/Algorithms/RR";
import { GanttChart } from "../../components/GanttChart";
import { Table } from "../../components/Table";
import { AnimatedSection } from "../../components/Animated";
 

const OutputPage = ({
  algorithm,
  arrivalTimes,
  burstTimes,
  priorities,
  quantumTime,
  showOutput,
}) => {
  let result;
  if (showOutput) {
    switch (algorithm) {
      case "Priority Scheduling":
        result = PS(arrivalTimes, burstTimes, priorities);
        break;
      case "Round Robin, RR":
        result = RR(arrivalTimes, burstTimes, quantumTime);
        break;
      default:
        result = 0;
        break;
    }
  }

  return (
    <div className="flex w-3/4 justify-center items-center flex-col mb-6 h-fit w-4/5 px-6 py-6  ">
      {showOutput && (
        <div>
          <AnimatedSection ganttChartInfo={result.ganttChartInfo}/>
          <GanttChart ganttChartInfo={result.ganttChartInfo} />
          <Table data={result.solvedProcesses} />
          <div className="mt-8 flex justify-between">
            <div className="text-center">
              <p className="mb-2 text-gray-50 font-bold font-sans text-xl text-gray-500">
                Average Turn Around Time
              </p>
              <p className="font-bold font-sans text-white text-lg">{result.avgTurnAroundTime.toFixed(2)}</p>
            </div>
            <div className="text-center">
              <p className="mb-2 font-bold text-gray-100  font-sans text-xl">
                Average Waiting Time
              </p>
              <p className="font-bold font-sans text-lg text-gray-100">{result.avgWaitingTime.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutputPage;
