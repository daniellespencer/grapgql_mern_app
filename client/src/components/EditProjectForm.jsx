import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_PROJECT } from "../queries/projectQueries"
import { UPDATE_PROJECT } from "../mutations/projectMutations"

// const ProjectStatusOptions = {Not_Started: "new", In_Progress: "progress", Completed: "completed"}
const dsTest = {
  new: "Not Started",
  progress: "In Progress",
  completed: "Completed",
}

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)

  //   console.log("project status", project?.status)
  //   console.log(
  //     "ds test",
  //     Object.keys(dsTest).find((key) => dsTest[key] === project.status)
  //   )
  const statusDisplay = Object.keys(dsTest).find(
    (key) => dsTest[key] === project.status
  )
  const [status, setStatus] = useState(statusDisplay)
  // const [clientId, setClientId] = useState("")

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name || !description || !status) {
      return alert("Please fill out all fields")
    }
    updateProject(name, description, status)
  }

  return (
    <div className='mt-5'>
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor=''>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className='form-label' htmlFor=''>
            Description
          </label>
          <textarea
            className='form-control'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label className='form-label' htmlFor=''>
            Status
          </label>
          <select
            className='form-select'
            value={status}
            id='status'
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value='new'>Not Started</option>
            <option value='progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditProjectForm
