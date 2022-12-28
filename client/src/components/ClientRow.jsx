import React from "react"
import { useMutation } from "@apollo/client"
import PropTypes from "prop-types"
import { FaTrash } from "react-icons/fa"
import { DELETE_CLIENT } from "../mutations/clientMutations"
import { GET_CLIENTS } from "../queries/clientQueries"
import { GET_PROJECTS } from "../queries/projectQueries"

const ClientRow = ({ client }) => {
  const { name, email, phone, id } = client
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  })

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}

ClientRow.propTypes = {
  client: PropTypes.object,
}

export default ClientRow
