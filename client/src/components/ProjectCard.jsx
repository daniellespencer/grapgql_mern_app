import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const ProjectCard = ({ project }) => {
  const { name, id, status } = project
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{name}</h5>
            <Link
              to={`/projects/${id}`}
              className='btn btn-light btn-sm w-25 d-inline ms-auto'
            >
              View
            </Link>
          </div>
          <p className='small'>
            Status: <strong>{status}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
}
