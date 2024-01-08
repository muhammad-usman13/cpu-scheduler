import './style.css'
import React, { useState, useEffect } from 'react';
import svg from '../../styles/cpu.svg';
export const AnimatedSection = ({ ganttChartInfo }) => {
    const [readyQueue, setReadyQueue] = useState([]); 
    const [currentProcess, setCurrentProcess] = useState(null); 
    useEffect(() => {
        let currentTime = 0;
        const processQueue = async () => {

            for (const process of ganttChartInfo) {
                // Simulate waiting time
                await new Promise(resolve => setTimeout(resolve, process.start - currentTime));
                currentTime = process.start;

                // Move process to CPU
                setCurrentProcess(process);

                // Remove process from ready queue
                setReadyQueue(readyQueue.filter(p => p !== process));

                // Simulate processing time
                await new Promise(resolve => setTimeout(resolve, (process.stop - process.start) * 1000));

                // Move process out of CPU
                setCurrentProcess(null);
                currentTime = process.stop;
            }
        };
        console.log("useEffect")
        processQueue();
    }, [ganttChartInfo])


    return (
        <div className='animated-section'>
            
            <div className='cpu'>
                <img className='cpu-svg' src={svg} alt="" />
                {currentProcess && <div  className='cpu-process'>{currentProcess.processID}</div>}
            </div>
        </div>
    )
}