import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-orange-500 text-black-500 text-3xl'>
      User is {userid}
    </div>
  )
}

export default User
