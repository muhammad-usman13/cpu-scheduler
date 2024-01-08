export const GanttChart = ({ ganttChartInfo }) => {
  return (
    <>
      <p className="mb-2 text-gray-100 font-bold font-sans text-xl text-gray-500">Gantt Chart:</p>
      <div className="flex justify-center flex-wrap">
        {ganttChartInfo.map((ele, i) => (
          <div key={ele+i} className="relative  px-4 py-2 bg-white mr-2 mb-6 font-sans text-sm text-black">
            {ele.processID}
            <p className="absolute text-gray-100 -bottom-5 left-0 text-xs text-black antialiased lining-nums">
              {ele.start}
            </p>
            <p className="absolute text-gray-100 -bottom-5 right-0 text-xs text-black antialiased lining-nums">
              {ele.stop}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
