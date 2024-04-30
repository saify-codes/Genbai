import React, { useEffect, useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { useForm } from '@mantine/form';
import MyModal from '../Modal/MyModal';
import { useUser } from '@/context/UserContext';
import { GoPlus } from 'react-icons/go';
import { TextInput, Tooltip } from '@mantine/core';
import { FaPencil } from 'react-icons/fa6';
import { useTheme } from '@/context/ThemeContext';
import showToastMessage from '../ToastMessage/Index';
import MyAxios from '@/utils/AxiosConfig';
import { BsThreeDots } from 'react-icons/bs';


const ProjectCreateModal = () => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const { workSpace, updateAllProjectInWorkSpace, allProject, selectedProject, changeProject } = useUser();
    const [projectModal, setProjectModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          title: '',
        },
    
        validate: {
            title: (value) => value.trim() ? null : 'Project Name is required',
        },
    });

    console.log(selectedProject, "selectedProjectselectedProject;sss", workSpace);

    // const getAllProject = (id) => {
    //     MyAxios.get(`/project/workspace/${id}`).then(res => {
    //         console.log(res.data, "=== res.data: Projeee");
    //         updateAllProjectInWorkSpace(res.data.projects);
    //     })
    //     .catch(err => {
    //         console.log(err, " == error: WorkSpace");
    //     });
    // }

    // useEffect(()=>{
    //     if(workSpace.id){
    //         getAllProject();
    //     }
    // }, [workSpace.id])

    const handleSubmit = (values) => {
        // console.log({ ...values, workspaceId: workSpace.id }, " ==Form:values");
        setLoading(true);
        MyAxios.post("/project", { ...values, workspaceId: workSpace.id })
        .then(res => {
            console.log(res, " = res: Projec:C.Mod");
            form.reset();
            updateAllProjectInWorkSpace([...allProject, res.data.project], workSpace.id)
            setProjectModal(false);
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
          <p>PROJECTSPACE</p>
          <div className='flex items-center gap-2'>
            <Tooltip label="Add Project" color={isLight ? "indigo": "blue"}>
                <p className='cursor-pointer' onClick={()=>setProjectModal(true)}><GoPlus /></p>
            </Tooltip>
            <Menu as="div" className="relative inline-block text-left">
                <div className="flex justify-center items-center">
                    <Tooltip label="Switch Project" color={isLight ? "indigo": "blue"} position='right'>
                        <Menu.Button> 
                            <BsThreeDots />
                        </Menu.Button>
                    </Tooltip>
                </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className={`absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border-[1px] shadow-lg ring-1 ring-black/5 focus:outline-none overflow-auto max-h-[380px] ${theme === 'light' ? "border-[#B4C6E4] bg-white text-[#143261]": "border-[#143261] bg-[#061123] text-[#99C0FF]"}`}>
                            <div className="p-1">
                                {allProject?.length > 0 ? 
                                    allProject?.map((proj, index) => {
                                        console.log(proj, "ssnjnajs");
                                        return(
                                            <Menu.Item key={index}>
                                                {({ active }) => (
                                                    <button disabled={proj.id === selectedProject.id} onClick={()=> changeProject(proj)}
                                                        className={`${theme === 'light' ? "text-[#305288]": "text-white"} ${active ? 'bg-[#132C53] text-white' : ''
                                                            } ${proj.id === selectedProject.id ? "bg-[#057BF1] text-white": ""} mb-1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {proj.Title}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        )})
                                :
                                <p className={`${theme === 'light' ? "text-[#305288]": "text-white"} mb-1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}>No Project In This WorkSpace</p>}
                            </div>
                        </Menu.Items>
                    </Transition>
            </Menu>
          </div>
        </div>
        <MyModal title='Add New Project' open={projectModal} close={()=>setProjectModal(false)}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    mt="md"
                    rightSectionPointerEvents="none"
                    rightSection={<FaPencil className={`${isLight ? "": ""}`} />}
                    label="Project Name"
                    placeholder="Enter Project Name"
                    {...form.getInputProps('title')}
                    styles={{ input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' } }}
                />
                <button disabled={loading} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200 flex items-center justify-center gap-2 font-bold p-2 rounded-md w-full mt-3 ${isLight ? "": ""} `}>
                    {loading ? "Creating ...": "Create Project"}
                </button>
            </form>
        </MyModal>
    </>
  )
}

export default ProjectCreateModal
