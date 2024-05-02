import React, { useEffect, useState } from 'react'
import MyModal from '../Modal/MyModal';
import { Select, TextInput, Textarea } from '@mantine/core';
import { FaPencil } from 'react-icons/fa6';
import { useUser } from '@/context/UserContext';
import { useTheme } from '@/context/ThemeContext';
import { useForm } from '@mantine/form';
import MyAxios from '@/utils/AxiosConfig';
import showToastMessage from '../ToastMessage/Index';
import { FaPlus } from 'react-icons/fa';
import { DateInput, DatePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import '@mantine/dates/styles.css';
import { StoryBackLog } from '@/utils/svg_icons';
import { RiReactjsLine } from 'react-icons/ri';
import { MdOutlineChromeReaderMode } from 'react-icons/md';

const DURATION = [
    { value: '1 Day', label: '1 Day' },
    { value: '2 Days', label: '2 Days' },
    { value: '3 Days', label: '3 Days' },
    { value: '1 Week', label: '1 Week' },
    { value: '2 Weeks', label: '2 Weeks' },
    { value: '3 Weeks', label: '3 Weeks' },
    { value: '1 Month', label: '1 Month' },
    { value: '2 Month', label: '2 Month' },
    { value: '3 Month', label: '3 Month' },
    { value: 'More than 3 Month', label: 'More than 3 Month' },
]

const CreateSprintModal = ({ addNew=()=>{}, fromTable=false, teamId='' }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [sprintModal, setSprintModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allValues, setAllValues] = useState({ teams: [], projectId: null, initiatives: [] });
    const { allProject, selectedProject, allTeamInProject, } = useUser();



    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          Title: '',
          Duration: null,
          StartDate: null,
          EndDate: null,
          Description: '',
          Story: null,
        },
    
        validate: {
          Title: (value) => value.trim() ? null : 'Sprint Name is required',
        },
    });



    const handleSubmit = (values) => {
        console.log(values, " ==Form:values:Create Epic Modal");
        const dataToBeSend = {
            ...values,
            ownerId: 1,
            StartDate: values.StartDate ? dayjs(values.StartDate).format("YYYY-MM-DD"): null,
            EndDate: values.EndDate ? dayjs(values.EndDate).format("YYYY-MM-DD"): null,
            TeamId: teamId,
            projectId: selectedProject.id,
        }
        console.log(dataToBeSend, " ==Form:values:Create Sprint Modal");
        setLoading(true);
        MyAxios.post("/sprint", dataToBeSend)
        .then(res => {
            console.log(res.data, " = res.data: Epic create");
            form.reset();
            console.log(selectedProject.id == Number(values.projectId), "===allEpicsallEpics:If");
            if(selectedProject.id == Number(values.projectId)){
                addNew(res.data.sprint);
            }
            setSprintModal(false);
            showToastMessage(res?.data?.message, "success");
        })
        .catch(error => {
            console.log(error, " = error: WorkSpace");
            showToastMessage(error.response?.data?.message || "Something went wrong", "error");
        })
        .finally(()=>{
            setLoading(false);
        })
    }


  return (
    <>
        <button onClick={()=>setSprintModal(true)} className={`${fromTable ? "": "bg-[#057BF1] hover:bg-[#359affe5] text-white hover:text-gray-100 w-[240px]"} flex items-center justify-center gap-2 font-semibold px-3 py-2 rounded-md`}>
            <FaPlus  />
            Create Sprint
        </button>
        <MyModal title='Create Sprint' open={sprintModal} close={()=>setSprintModal(false)} className="p-3 w-[568px]">
        <div className={`p-2 mt-3 mb-1 rounded-md border text-sm ${isLight ? "bg-[#F2F7FD] border-[#CCE4FF] text-[#305288]": "bg-[#132C53] text-[#99C0FF] border-[#07335F]"}`}>
            <span className='font-bold'>'Sprints'</span> are collections of <span className='font-bold'>'Stories'</span> chosen to be completed within a defined, short timeframe, allowing teams to manage work iteratively.
        </div>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Select
                label="Duration"
                placeholder="Select Duration"
                className='mt-2'
                withAsterisk
                data={DURATION}
                {...form.getInputProps('Duration')}
                allowDeselect={false}
                checkIconPosition="right"
                styles={{
                    input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                    dropdown: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                    option: isLight ? undefined : { color: '#ffffff', background: '#06152D' },  // Default state for items in dark mode
                    label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                }}
            />
            <TextInput
                mt="md"
                rightSectionPointerEvents="none"
                rightSection={<FaPencil className={`${isLight ? "": ""}`} />}
                label="Sprint Name"
                withAsterisk
                placeholder="Enter Sprint Title"
                {...form.getInputProps('Title')}
                styles={{ 
                    input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                    label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                }}
            />
            <div className="flex items-center justify-between">
                <div className="w-[48%]">
                    <DateInput
                        classNames={`w-full`}
                        label="Start Date"
                        placeholder="None"
                        {...form.getInputProps('StartDate')}
                        inputFormat="YYYY-MM-DD"
                        minDate={dayjs(new Date()).toDate()}
                        className="mt-2"
                        firstDayOfWeek="monday"
                        styles={{ 
                            input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                        }}
                    />
                </div>
                <div className="w-[48%]">
                    <DateInput
                        classNames={`w-full`}
                        label="End Date"
                        placeholder="None"
                        {...form.getInputProps('EndDate')}
                        inputFormat="YYYY-MM-DD"
                        minDate={form.values.StartDate || dayjs(new Date()).toDate()}
                        className="mt-2"
                        firstDayOfWeek="monday"
                        styles={{ 
                            input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                        }}
                    />
                </div>
            </div>
            <Textarea
                label="Sprint Goal"
                placeholder="Add a description..."
                {...form.getInputProps('Description')}
                autosize
                minRows={5}
                maxRows={7}
                className="mt-2"
                styles={{
                    input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                    label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                }}
            />
            <div className={`flex justify-between items-center px-1 py-2 mt-2 border-b ${isLight ? "border-[#B4C6E4]": "border-[#12294E]"}`}>
                <div className={`flex items-center gap-3 ${isLight ? "": "text-[#99C0FF]"}`}>
                    <MdOutlineChromeReaderMode className={`${isLight ? "text-[#305288]": "text-[#99C0FF]"}`} />
                    <span className='font-semibold '>Stories</span>
                </div>
                <button type='button' className={`flex items-center justify-center gap-2 font-bold py-1 px-4 rounded-md border ${isLight ? "text-[#305288] border-[#B4C6E4] hover:bg-gray-100": "text-[#99C0FF] border-[#12294E] hover:bg-[#1b2d4b]"} `}>
                    <FaPlus />
                    <span className=''>Add Existing Story</span>
                </button>
            </div>
            <div className="mt-2">
                <div className={`${isLight ? "": "text-[#305288]"}`}>There are no Stories in this Epic.. </div>
                <div className={`flex items-center gap-3 px-1 py-2 mt-1`}>
                    <button type='button' className={`flex items-center justify-center gap-2 font-bold py-1 px-4 rounded-md border ${isLight ? "text-[#305288] border-[#B4C6E4] hover:bg-gray-100": "text-[#99C0FF] border-[#12294E] hover:bg-[#1b2d4b]"} `}>
                        <FaPlus />
                        <span className=''>Create Story</span>
                    </button>
                    <button type='button' className={`flex items-center justify-center gap-2 font-bold py-1 px-4 rounded-md border ${isLight ? "text-[#305288] border-[#B4C6E4] hover:bg-gray-100": "text-[#99C0FF] border-[#12294E] hover:bg-[#1b2d4b]"} `}>
                        <RiReactjsLine />
                        <span className=''>Generate Story</span>
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-start mt-4 mb-2'>
                <button onClick={()=>setSprintModal(false)} type='button' disabled={loading} className={`${isLight ? "text-[#057BF1] hover:text-[#4199F1]": "text-[#4199F1] hover:text-[#057BF1]"} flex items-center justify-center gap-2 font-bold p-2 rounded-md `}>
                    Cancel
                </button>
                <button type='submit' disabled={loading} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200 flex items-center justify-center gap-2 font-bold py-2 px-4 rounded-md ${isLight ? "": ""} `}>
                    {loading ? "Creating ...": "Create Sprint"}
                </button>
            </div>
        </form>
        </MyModal>
    </>
  )
}

export default CreateSprintModal
