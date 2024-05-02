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

const CreateEpicModal = ({ addNew=()=>{}, fromTable=false, }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [epicModal, setEpicModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allValues, setAllValues] = useState({ teams: [], projectId: null, initiatives: [] });
    const { allProject, selectedProject, allTeamInProject, } = useUser();

    // console.log(allTeamInProject, " ===allTeamInProject:CreateModal");


    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          Title: '',
          projectId: selectedProject ? selectedProject?.id?.toString() : '',
          StartDate: null,
          EndDate: null,
          Description: '',
          TeamId: null,
          Priority: 'High',
          InitiativeId: null,
        },
    
        validate: {
          Title: (value) => value.trim() ? null : 'Initiative Name is required',
          projectId: (value) => value ? null : 'Project selection is required',
        },
    });

    const handleProjectChange = async (projId) => {
        form.setFieldValue('projectId', projId);
        form.setFieldValue('TeamId', null);
        form.setFieldValue('InitiativeId', null);
        try {
            const res = await Promise.all([MyAxios.get(`/team/project/${projId}`), MyAxios.get(`/initiative/project/${projId}`)]);
            console.log(res, "==askasmascnacanjas:kkkk");
            // console.log(res[1].data.initiatives, "===initiatives:res:ProjectChange");
            if(res.length > 0){
                setAllValues(prev => ({ ...prev, teams: res[0].data.teams ?? [], initiatives: res[1].data.initiatives }));
            }
        } catch (error) {
            console.log(error, " ==error:get:Team");
        }
    }

    useEffect(() => {
        if (selectedProject.id) {
            form.setFieldValue('projectId', selectedProject.id.toString());
            handleProjectChange(selectedProject.id)
            setAllValues(prev => ({ ...prev, projectId: selectedProject.id.toString(), }))
        }
    }, [selectedProject]);


    const handleSubmit = (values) => {
        console.log(values, " ==Form:values:Create Epic Modal");
        const dataToBeSend = {
            ...values,
            ownerId: 1,
            StartDate: values.StartDate ? dayjs(values.StartDate).format("YYYY-MM-DD"): null,
            EndDate: values.EndDate ? dayjs(values.EndDate).format("YYYY-MM-DD"): null,
        }
        console.log(dataToBeSend, " ==Form:values:Create Epic Modal");
        setLoading(true);
        MyAxios.post("/epic", dataToBeSend)
        .then(res => {
            console.log(res.data, " = res.data: Epic create");
            form.reset();
            console.log(selectedProject.id == Number(values.projectId), "===allEpicsallEpics:If");
            addNew(res.data.data);
            // if(selectedProject.id == Number(values.projectId)){
            // }
            setEpicModal(false);
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
        <button onClick={()=>setEpicModal(true)} className={`${fromTable ? "": "bg-[#057BF1] hover:bg-[#359affe5] text-white hover:text-gray-100 w-[240px]"} flex items-center justify-center gap-2 font-semibold px-3 py-2 rounded-md`}>
            <FaPlus  />
            Create Epic
        </button>
        <MyModal title='Create Epic' open={epicModal} close={()=>setEpicModal(false)} className="p-3 w-[568px]">
        <div className={`p-2 mt-3 mb-1 rounded-md border text-sm ${isLight ? "bg-[#F2F7FD] border-[#CCE4FF] text-[#305288]": "bg-[#132C53] text-[#99C0FF] border-[#07335F]"}`}>
            An <span className='font-bold'>'Epic'</span> is a group of <span className='font-bold'>'Stories'</span> that collectively represent a larger project or feature. Epics allow you to connect stories across multiple <span className='font-bold'>'Teams'</span>. 
        </div>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <div className="flex items-center justify-between">
                <div className="w-[48%]">
                    <Select
                        label="Projectspace"
                        placeholder="Select Project"
                        className='mt-2'
                        withAsterisk
                        data={allProject?.length > 0 ? allProject.map((project) => ({ value: project.id.toString(), label: project.Title })): [{ value: 'No Project Available', label: 'No Project Available', disabled: true },]}
                        {...form.getInputProps('projectId')}
                        // defaultValue={selectedProject ? selectedProject.id.toString() : ''}
                        onChange={handleProjectChange}
                        // value={}
                        allowDeselect={false}
                        checkIconPosition="right"
                        styles={{
                            input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            dropdown: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            option: isLight ? undefined : { color: '#ffffff', background: '#06152D' },  // Default state for items in dark mode
                            label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                        }}
                    />
                </div>
                <div className="w-[48%]">
                    <Select
                        label="Initiative"
                        placeholder="Select Initiative"
                        className='mt-2'
                        data={allValues?.initiatives?.length > 0 ? allValues?.initiatives?.map((project) => ({ value: project.id.toString(), label: project.Title })): [{ value: 'No Project Available', label: 'No Project Available', disabled: true },]}
                        {...form.getInputProps('InitiativeId')}
                        allowDeselect={false}
                        checkIconPosition="right"
                        styles={{
                            input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            dropdown: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            option: isLight ? undefined : { color: '#ffffff', background: '#06152D' },  // Default state for items in dark mode
                            label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                        }}
                    />
                </div>
            </div>
            <TextInput
                mt="md"
                rightSectionPointerEvents="none"
                rightSection={<FaPencil className={`${isLight ? "": ""}`} />}
                label="Epic Name"
                withAsterisk
                placeholder="Enter Epic Title"
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
                label="Description"
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
            <div className="flex justify-between items-center">
                <div className="w-[48%]">
                    <Select
                        label="Team"
                        placeholder="Select Team"
                        className='mt-2'
                        data={allValues?.teams?.length > 0 ? allValues?.teams.map((team) => ({ value: team.id.toString(), label: team.title })): [{ value: 'No Team Available', label: 'No Team Available', disabled: true },]}
                        {...form.getInputProps('TeamId')}
                        // defaultValue={selectedProject ? selectedProject.id.toString() : ''}
                        // data={[{ value: 'No Owner Available', label: 'No Owner Available', disabled: true },]}
                        allowDeselect={false}
                        checkIconPosition="right"
                        styles={{
                            input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            dropdown: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            option: isLight ? undefined : { color: '#ffffff', background: '#06152D' },  // Default state for items in dark mode
                            label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                        }}
                    />
                </div>
                <div className="w-[48%]">
                    <Select
                        label="Priority"
                        placeholder="Select Priority"
                        className='mt-2'
                        data={['High', 'Low',]}
                        {...form.getInputProps('Priority')}
                        // defaultValue={selectedProject ? selectedProject.id.toString() : ''}
                        allowDeselect={false}
                        checkIconPosition="right"
                        styles={{
                            input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            dropdown: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                            option: isLight ? undefined : { color: '#ffffff', background: '#06152D' },  // Default state for items in dark mode
                            label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                        }}
                    />
                </div>
            </div>
            <div className='flex justify-between items-start mt-4 mb-2'>
                <button onClick={()=>setEpicModal(false)} type='button' disabled={loading} className={`${isLight ? "text-[#057BF1] hover:text-[#4199F1]": "text-[#4199F1] hover:text-[#057BF1]"} flex items-center justify-center gap-2 font-bold p-2 rounded-md `}>
                    Cancel
                </button>
                <button type='submit' disabled={loading} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200 flex items-center justify-center gap-2 font-bold py-2 px-4 rounded-md ${isLight ? "": ""} `}>
                    {loading ? "Creating ...": "Create Epic"}
                </button>
            </div>
        </form>
        </MyModal>
    </>
  )
}

export default CreateEpicModal
