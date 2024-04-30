"use client";
import MyAxios from '@/utils/AxiosConfig';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
  allWorkSpace: [],
  workSpace: {},
  project: {},
  allProject: [],
});

export const UserProvider = ({ children }) => {
  const [allWorkSpace, setAllWorkSpace] = useState({});
  const [workSpace, setWorkSpace] = useState({});
  const [allProject, setAllProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [allTeamInProject, setAllTeamInProject] = useState({});

  
  const changeProject = (data) => {
    setSelectedProject(data);
    localStorage.setItem("project", JSON.stringify(data));
  }
  const updateAllProjectInWorkSpace = (data, id) => {
    setAllProject(data);
    console.log(data, " =data, ", selectedProject, "asnjsnasnsasnacnajnas:pprohj");
    if(selectedProject?.workspaceId == id){

    }
    else if(data?.length > 0){
      changeProject(data[0]);
    }
    else {
      changeProject({});
    }
  }

  const getAllProject = (id) => {
    console.log(id, " = iddddd:getAllProjecttssss");
    if(id){
      MyAxios.get(`/project/workspace/${id}`).then(res => {
        console.log(res.data, "=== res.data: Projeee");
        updateAllProjectInWorkSpace(res.data.projects, id);
      })
      .catch(err => {
          console.log(err, " == error: WorkSpace");
      });
    }
  }

  const updateWorkSpace = (data) => {
    console.log("===workSpaceworkSpace:updateFunc", data);
    setWorkSpace(data);
    getAllProject(data.id);
    localStorage.setItem("workspace", JSON.stringify(data));
  }
  
  const allTeamReducer = (data) => {
    setAllTeamInProject(data);
  }

  useEffect(() => {
    try {
      const workSpaceRaw = localStorage.getItem("workspace");
      // console.log(workSpaceRaw, " =workSpaceLS:UserContext, ");
      const workSpaceLS = (workSpaceRaw !== 'undefined' && workSpaceRaw !== 'null' && workSpaceRaw !== '{}') ? JSON.parse(workSpaceRaw) : {};
      console.log(workSpaceLS, " ==snajsn:workSpaceLS");
      const projectRaw = localStorage.getItem("project");
      // console.log(" =workSpaceLS:UserContext:Proj, ", projectRaw, " ==== ,", typeof projectRaw);
      const projectLS = (projectRaw !== 'undefined' && projectRaw !== 'null' && projectRaw !== '{}') ? JSON.parse(projectRaw) : {};
  

      if (Object.keys(workSpaceLS).length > 0) {
        updateWorkSpace(workSpaceLS);
      }
  
      // Assuming there's similar logic for projectLS you might want to implement
      if (Object.keys(projectLS).length > 0) {
        updateProject(projectLS); // Ensure you have a corresponding function to handle project updates
      }
    } catch (error) {
      console.error("Failed to parse data from localStorage:", error);
    }
  }, []);

  

  useEffect(()=>{
    console.log("useEfect:1 ", workSpace, " =workspace, ", allProject);
    if(workSpace.id && allProject.length === 0){
      console.log("useEfect:2");
      getAllProject(workSpace.id)
    }
}, [workSpace])

  const setAllWorkSpaceReducer = (data) => {
    setAllWorkSpace(data);
    if(Object.keys(workSpace || {})?.length === 0){
      updateWorkSpace(data[0]);
    }
  } 

  return (
    <UserContext.Provider 
      value={{ 
        workSpace, updateWorkSpace, selectedProject, changeProject, allProject, updateAllProjectInWorkSpace, 
        allWorkSpace, setAllWorkSpaceReducer, allTeamInProject, allTeamReducer,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

