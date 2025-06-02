import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    < main className="flex gap-8 h-screen my-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  )
}

export default App;
