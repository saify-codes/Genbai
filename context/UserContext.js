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
  const [allWorkSpace, setAllWorkSpace] = useState([]);
  const [workSpace, setWorkSpace] = useState({});
  const [allProject, setAllProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [allTeamInProject, setAllTeamInProject] = useState([]);


  // Get All Team Data By Project Id -> Alq
  const getAllTeamOfProject = async (projId) => {
    try {
      console.log(projId, "===projIdprojIdprojIdprojId");
      if(projId && projId !== 'undefined' && projId !== 'null'){
        const res = await MyAxios.get(`/team/project/${projId}`);
        console.log(res.data, "===team:res:UserContext");
        if(res.data.success){
          setAllTeamInProject(res.data.teams);
        }
      }
    } catch (error) {
      console.log(error, " ==error:get:Team");
      setAllTeamInProject([]);
    }
  }

  const changeProject = (data) => {
    setSelectedProject(data);
    getAllTeamOfProject(data.id);
    localStorage.setItem("project", JSON.stringify(data));
  }

  const updateAllProjectInWorkSpace = (data, id) => {
    setAllProject(data);
    console.log(data, " =data, ", selectedProject, "asnjsnasnsasnacnajnas:pprohj, ", selectedProject?.workspaceId == id);
    if(selectedProject?.workspaceId == id){
      getAllTeamOfProject(selectedProject.id);
    }
    else if(data?.length > 0){
      changeProject(data[0]);
      getAllTeamOfProject(data[0].id);
    }
    else {
      changeProject({});
    }
  }


  const getAllProject = (id) => {
    console.log(id, " = iddddd:getAllProjecttssss");
    if(id && (typeof id === 'string' || typeof id === 'number')){
      MyAxios.get(`/project/workspace/${id}`).then(res => {
        console.log(res.data, "=== res.data: Projeee");
        updateAllProjectInWorkSpace(res.data.data, id);
      })
      .catch(err => {
          console.log(err, " == error: WorkSpace");
      });
    }
    else {
      changeProject({});
    }
  }

  const updateWorkSpace = (data) => {
    console.log("===workSpaceworkSpace:updateFunc", data);
    setWorkSpace(data);
    getAllProject(data.id ?? null);
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
      // console.log(workSpaceLS, " ==snajsn:workSpaceLS");
      const projectRaw = localStorage.getItem("project");
      const projectLS = (
        projectRaw !== undefined && 
        projectRaw !== null && 
        projectRaw !== 'undefined' && 
        projectRaw !== 'null' && 
        projectRaw !== '{}'
      ) ? JSON.parse(projectRaw) : {};

      if (Object.keys(workSpaceLS)?.length > 0) {
        updateWorkSpace(workSpaceLS);
      }
  
      if (Object.keys(projectLS)?.length > 0) {
        setSelectedProject(projectLS); 
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
    if(data?.length === 0){
      setAllWorkSpace([]);
      setWorkSpace({});
      getAllProject({});
      setAllTeamInProject([]);
      localStorage.setItem("workspace", JSON.stringify({}));
    }
    else {
      setAllWorkSpace(data);
      if(Object.keys(workSpace || {})?.length === 0){
        updateWorkSpace(data[0]);
      }
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

