import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  
  function handleStartProjectCreation() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }
  
  let content;
  
  if(projectsState.selectedProjectId === null) {
    content = <NewProject />;
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProjectCreation} />;
  }
  
  return (
    < main className="flex gap-8 h-screen my-8">
      <ProjectsSidebar onStartAddProject={handleStartProjectCreation}/>
      {content}
    </main>
  )
}

export default App;
