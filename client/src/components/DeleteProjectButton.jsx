import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { GET_PROJECTS } from "../queries/projectQueries"
import { useMutation } from "@apollo/client"
import { DELETE_PROJECT } from "../mutations/projectMutations"

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate()
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  })
  return (
    <>
      <button
        className='btn btn-danger ms-3 d-flex justify-content-center align-items-center'
        onClick={deleteProject}
      >
        <FaTrash className='icon' />
        <div>Delete Project</div>
      </button>
    </>
  )
}

DeleteProjectButton.propTypes = {
  projectId: PropTypes.string,
}

export default DeleteProjectButton
