import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { SlArrowDown } from "react-icons/sl";
import MyModal from '../Modal/MyModal';
import { TextInput, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaPencil } from 'react-icons/fa6';
import MyAxios from '@/utils/AxiosConfig';
import showToastMessage from '../ToastMessage/Index';
import { useUser } from '@/context/UserContext';
import { BsThreeDots } from 'react-icons/bs';


const ALL_WORKSPACE = [
    { id: 0, title: 'Create New Work Space', },
]

function WorkSpaceMenuDropDown() {
    const { theme } = useTheme();
    const { allWorkSpace, workSpace, updateWorkSpace, setAllWorkSpaceReducer } = useUser();
    const isLight = theme === 'light';
    const [workSpaceModal, setWorkSpaceModal] = useState(false);
    // const [workSpaceName, setWorkSpaceName] = useState('');
    const [loading, setLoading] = useState(false);
    // const [allWorkSpace, setAllWorkSpace] = useState([]);
    const [selectedWorkSpace, setSelectedWorkSpace] = useState('');

    console.log(workSpace, "===workSpaceworkSpaceallWorkSpace, ", allWorkSpace);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          name: '',
        },
    
        validate: {
            name: (value) => value.trim() ? null : 'WorkSpace Name is required',
        },
    });

    const handleWorkSpaceMenuClick = (data) => {
        console.log(data, "===iddddd");
        // setSelectedWorkSpace(data);
        updateWorkSpace(data)
    }
    
    useEffect(()=>{
        MyAxios.get("/workspace").then(res => {
            console.log(res, "=== res: WorkSpace");
            setAllWorkSpaceReducer(res.data.workspaces);
        })
        .catch(err => {
            console.log(err, " == error: WorkSpace");
            setAllWorkSpaceReducer([]);
        });
    }, [])

    const handleSubmit = (values) => {
        console.log(values, " ==Form:values");
        setLoading(true);
        MyAxios.post("/workspace", { title: values.name })
        .then(res => {
            console.log(res, " = res: WorkSpace");
            form.reset();
            setAllWorkSpaceReducer([...allWorkSpace, res.data.workspace])
            setWorkSpaceModal(false);
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
        <MyModal open={workSpaceModal} close={()=>setWorkSpaceModal(false)} title="Create New Work Space">
            {/* <div className="mt-2"> */}
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    mt="md"
                    rightSectionPointerEvents="none"
                    rightSection={<FaPencil className={`${isLight ? "": ""}`} />}
                    label="Workspace Name"
                    placeholder="Enter WorkSpace Name"
                    // key={form.key('name')}
                    {...form.getInputProps('name')}
                    // onChange={(event) => setWorkSpaceName(event.currentTarget.value)}
                    styles={{ 
                        input: isLight ? { background: '#ffffff', color: '#06152D' } : { background: '#06152D', color: '#ffffff' },
                        label: isLight ? { color: '#06152D' }: { color: '#FFF' },
                    }}
                />
                <button disabled={loading} className={`bg-[#057BF1] hover:bg-[#057bf1d2] text-white hover:text-gray-200 flex items-center justify-center gap-2 font-bold p-2 rounded-md w-full mt-3 ${isLight ? "": ""} `}>
                    {loading ? "Creating ...": "Create WorkSpace"}
                </button>
            </form>
            {/* </div> */}
        </MyModal>
        <Menu as="div" className="relative inline-block text-left">
            <div className="flex justify-center items-center">
                    <Tooltip label="Add/Switch WorkSpace" color={isLight ? "indigo": "blue"} position='right'>
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
                        {[...ALL_WORKSPACE, ...allWorkSpace]?.map((wSpace, index) => {
                            return(
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button disabled={wSpace.id === workSpace.id} onClick={()=> wSpace.id === 0 ? setWorkSpaceModal(true): handleWorkSpaceMenuClick(wSpace)}
                                            className={`${theme === 'light' ? "text-[#305288]": "text-[#fff]"} ${active ? 'bg-[#132C53] text-[#fff]' : ''
                                                } ${wSpace.id === workSpace.id ? "bg-[#057BF1] text-white": ""} mb-1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {wSpace.title}
                                        </button>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </>
  );
}

export default WorkSpaceMenuDropDown;
