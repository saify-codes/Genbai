import React, { useEffect, useState } from 'react'
import MyModal from '../Modal/MyModal';
import { Select, TextInput } from '@mantine/core';
import { FaPencil } from 'react-icons/fa6';
import { useUser } from '@/context/UserContext';
import { useTheme } from '@/context/ThemeContext';
import { useForm } from '@mantine/form';
import MyAxios from '@/utils/AxiosConfig';
import showToastMessage from '../ToastMessage/Index';

const CreateInitiativeModal = ({ addNew=()=>{}, }) => {
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const [initiativeModal, setInitiativeModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const { allProject, selectedProject,} = useUser();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          Title: '',
          projectId: selectedProject ? selectedProject?.id?.toString() : '',
        },
    
        validate: {
          Title: (value) => value.trim() ? null : 'Initiative Name is required',
          projectId: (value) => value ? null : 'Project selection is required',
        },
    });

    useEffect(() => {
        if (selectedProject.id) {
            form.setFieldValue('projectId', selectedProject.id.toString());
        }
    }, [selectedProject]);

    const handleSubmit = (values) => {
        console.log(values, " ==Form:values");
        setLoading(true);
        MyAxios.post("/initiative", values)
        .then(res => {
            console.log(res, " = res: team create");
            form.reset();
            if(selectedProject.id == Number(values.projectId)){
                addNew(res.data.data);
            }
            setInitiativeModal(false);
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
      <button onClick={()=>setInitiativeModal(true)} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200  font-bold px-2 py-[6px] rounded-md w-[140px]`}>
        Create Initiative
      </button>
      <MyModal title='Create Team in Team' open={initiativeModal} close={()=>setInitiativeModal(false)}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                mt="md"
                rightSectionPointerEvents="none"
                rightSection={<FaPencil className={`${isLight ? "": ""}`} />}
                label="Initiative Name"
                placeholder="Enter Initiative Title"
                {...form.getInputProps('Title')}
                styles={{ 
                    input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                    label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                }}
            />
            <Select
                label="Project Name"
                placeholder="Select Project"
                className='mt-2'
                data={allProject?.length > 0 ? allProject.map((project) => ({ value: project.id.toString(), label: project.Title })): [{ value: 'No Project Available', label: 'No Project Available', disabled: true },]}
                {...form.getInputProps('projectId')}
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
            <button disabled={loading} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200 flex items-center justify-center gap-2 font-bold p-2 rounded-md w-full my-6 ${isLight ? "": ""} `}>
                {loading ? "Creating ...": "Create Initiative"}
            </button>
        </form>
    </MyModal>
    </>
  )
}

export default CreateInitiativeModal
