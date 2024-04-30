import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form';
import MyModal from '../Modal/MyModal';
import { useUser } from '@/context/UserContext';
import { GoPlus } from 'react-icons/go';
import { Select, TextInput, Tooltip } from '@mantine/core';
import { FaPencil } from 'react-icons/fa6';
import { useTheme } from '@/context/ThemeContext';
import showToastMessage from '../ToastMessage/Index';
import MyAxios from '@/utils/AxiosConfig';
import { BsThreeDots } from 'react-icons/bs';


const TeamsCreate = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const { workSpace, allProject, selectedProject } = useUser();
    const [teamModal, setTeamModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          title: '',
          projectId: null,
        },
    
        validate: {
          title: (value) => value.trim() ? null : 'Team Name is required',
          projectId: (value) => value ? null : 'Project selection is required',
        },
    });

    console.log(allProject, "===allProjectallProject");

    const handleSubmit = (values) => {
        console.log({ ...values,}, " ==Form:values");
        setLoading(true);
        MyAxios.post("/team", { ...values, workspaceId: workSpace.id })
        .then(res => {
            console.log(res, " = res: WorkSpace");
            form.reset();
            setTeamModal(false);
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
        <div className="flex items-center justify-between">
          <label className="text-sm">TEAMS</label>
          <div className="space-x-2">
            <Tooltip label='Create Team' color={isLight ? "indigo": "blue"}>
              <button onClick={()=>setTeamModal(true)}><GoPlus /></button>
            </Tooltip>
            <button><BsThreeDots /></button>
          </div>
        </div>
        <MyModal title='Create Team in Team' open={teamModal} close={()=>setTeamModal(false)}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    mt="md"
                    rightSectionPointerEvents="none"
                    rightSection={<FaPencil className={`${isLight ? "": ""}`} />}
                    label="Team Name"
                    placeholder="Enter Team Name"
                    {...form.getInputProps('title')}
                    styles={{ input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' } }}
                />
                <Select
                    label="Project"
                    placeholder="Select Project"
                    data={allProject?.length > 0 ? allProject.map((project) => ({ value: project.id.toString(), label: project.Title })): [{ value: 'No Project Available', label: 'No Project Available', disabled: true },]}
                    {...form.getInputProps('projectId')}
                    defaultValue={{ value: selectedProject?.id?.toString(), label: selectedProject?.Title }}
                    allowDeselect={false}
                    checkIconPosition="right"
                    styles={{
                        input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                        dropdown: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                        option: isLight ? undefined : { color: '#ffffff', background: '#06152D' },  // Default state for items in dark mode
                      //   item: (styles, { hovered, selected }) => ({
                      //     ...styles,
                      //     backgroundColor: hovered ? (isLight ? '#FFF' : '#000') : selected ? (isLight ? '#c0c0c0' : '#333') : (isLight ? '#ffffff' : '#06152D'),
                      //     color: isLight ? '#06152D' : '#ffffff',
                      // }),
                    }}
                />
                <button disabled={loading} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200 flex items-center justify-center gap-2 font-bold p-2 rounded-md w-full mt-3 ${isLight ? "": ""} `}>
                    {loading ? "Creating ...": "Create Team"}
                </button>
            </form>
        </MyModal>
    </>
  )
}

export default TeamsCreate
