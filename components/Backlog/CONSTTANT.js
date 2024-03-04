import { BacklogDoneGreen, BacklogInProgressOrange, BacklogPlannedYellow, BugsStoryType, CircleLabel, DeliverablesSpikes, DesignStoryType, FeaturesStoryType, QualityStoryType, SpikesStoryType, TaskStoryType } from "@/utils/svg_icons";

export const EpicData = [
    { id: 1, isLabel: true, data: 'Planned', },
    { id: 2, isLabel: false, data: <><BacklogPlannedYellow /><span className='ml-2'>Epic Name</span></>, },
    { id: 3, isLabel: false, data: <><BacklogPlannedYellow /><span className='ml-2'>Epic Name</span></>, },
    { id: 4, isLabel: true, data: 'In Progress', },
    { id: 5, isLabel: false, data: <><BacklogInProgressOrange /><span className='ml-2'>Epic Name</span></>, },
    { id: 6, isLabel: false, data: <><BacklogInProgressOrange /><span className='ml-2'>Epic Name</span></>, },
    { id: 7, isLabel: true, data: 'Done', }, // Corrected duplicate id from previous code
    { id: 8, isLabel: false, data: <><BacklogDoneGreen /><span className='ml-2'>Epic Name</span></>, },
    { id: 9, isLabel: false, data: <><BacklogDoneGreen /><span className='ml-2'>Epic Name</span></>, },
];

export const StoryTypes = [
    { id: 2, isLabel: false, data: <><FeaturesStoryType /><span className='ml-2'>Features</span></>, },
    { id: 3, isLabel: false, data: <><BugsStoryType /><span className='ml-2'>Bugs</span></>, },
    { id: 5, isLabel: false, data: <><DesignStoryType /><span className='ml-2'>Design</span></>, },
    { id: 6, isLabel: false, data: <><QualityStoryType /><span className='ml-2'>QA Tests</span></>, },
    { id: 8, isLabel: false, data: <><SpikesStoryType /><span className='ml-2'>Spikes</span></>, },
    { id: 9, isLabel: false, data: <><TaskStoryType /><span className='ml-2'>Tasks</span></>, },
];

export const DeliverablesData = [
    { id: 1, isLabel: true, data: 'SPIKE', },
    { id: 2, isLabel: false, data: <><DeliverablesSpikes color="#6D65DC" /><span className='ml-2'>Implementation Plan</span></>, },
    { id: 3, isLabel: false, data: <><DeliverablesSpikes color="#11B5A1" /><span className='ml-2'>Research Report</span></>, },
    { id: 4, isLabel: false, data: <><DeliverablesSpikes color="#DC430A" /><span className='ml-2'>Feasibility Report</span></>, },
    { id: 5, isLabel: false, data: <><DeliverablesSpikes color="#DC8013" /><span className='ml-2'>Recommendations</span></>, },
    { id: 6, isLabel: true, data: 'DESIGN', },
    { id: 7, isLabel: false, data: <><DeliverablesSpikes color="#6D65DC" /><span className='ml-2'>Wireframe</span></>, },
];

export const LabelsData = [
    { id: 2, isLabel: false, data: <><CircleLabel color="#4BE7CD" /><span className='ml-2'>Frontend</span></>, },
    { id: 3, isLabel: false, data: <><CircleLabel color="#4B77E7" /><span className='ml-2'>Backend</span></>, },
    { id: 5, isLabel: false, data: <><CircleLabel color="#E74B83" /><span className='ml-2'>MVP</span></>, },
    { id: 6, isLabel: false, data: <><CircleLabel color="#744BE7" /><span className='ml-2'>API</span></>, },
    { id: 8, isLabel: false, data: <><CircleLabel color="#ADE903" /><span className='ml-2'>Mobile</span></>, },
    { id: 9, isLabel: false, data: <><CircleLabel color="#F89235" /><span className='ml-2'>Desktop</span></>, },
    { id: 9, isLabel: false, data: <><CircleLabel color="#F1CB00" /><span className='ml-2'>App</span></>, },
    { id: 9, isLabel: false, data: <><CircleLabel color="#E338D2" /><span className='ml-2'>Web</span></>, },
];