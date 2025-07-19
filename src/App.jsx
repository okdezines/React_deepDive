import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  

function handleSelectedProject(id) {
  setProjectsState((prevState) => {
    return {
      ...prevState,
      selectedProjectId: id,
    }
  })
}

  function handleStartProjectCreation() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }
  
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  
  const selectedProject= projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  
  
  
  // console.log(projectsState);
  let content =<SelectedProject project={selectedProject}/>

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartProjectCreation} />
    );
  }

  return (
    <main className="flex gap-8 h-screen my-8">
      <ProjectsSidebar 
      onStartAddProject={handleStartProjectCreation} projects={projectsState.projects} 
      onSelectProject={handleSelectedProject}
      />
      
      {content}
    </main>
  );
}

export default App;
