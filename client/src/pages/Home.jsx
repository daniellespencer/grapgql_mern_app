import AddClientModal from "../components/AddClientModal"
import AddProjectModal from "../components/AddProjectModal"
import Projects from "../components/Projects"
import Clients from "../components/Clients"

const Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <AddClientModal />
      <Clients />
    </>
  )
}

export default Home
