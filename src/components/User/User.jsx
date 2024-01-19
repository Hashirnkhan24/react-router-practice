import { useParams } from "react-router-dom"

function User() {
    const { userid } = useParams()
  return (
    <div className="bg-gray-500 text-white font-semibold text-3xl p-4 text-center">User: {userid}</div>
  )
}

export default User