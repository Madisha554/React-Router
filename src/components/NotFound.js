import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h1 className="mb-8"> 3:00<sub className='text-xl'>AM</sub> - Sleep Not Found</h1>
      <Link to="/" className="text-2xl ">Go to Dorm please</Link>
    </div>
  )
}

export default NotFound
