export const Row = ({ data }) => {
    return (
        <div className="flex border-collapse">
            <p className="w-32 text-sm text-gray-100 border-collapse text-center py-2 font-bold font-sans">{data.processID}</p>
            <p className="w-32 text-sm text-gray-100 border-collapse text-center py-2 font-bold font-sans">{data.aTime}</p>
            <p className="w-32 text-sm text-gray-100 border-collapse text-center py-2 font-bold font-sans">{data.bTime}</p>
            <p className="w-32 text-sm text-gray-100 border-collapse text-center py-2 font-bold font-sans">{data.ft}</p>
            <p className="w-32 text-sm text-gray-100 border-collapse text-center py-2 font-bold font-sans">{data.tat}</p>
            <p className="w-32 text-sm text-gray-100 border-collapse text-center py-2 font-bold font-sans">{data.wat}</p>
        </div>
    )
}