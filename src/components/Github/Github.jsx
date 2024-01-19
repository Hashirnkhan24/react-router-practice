
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hashirnkhan24')
    //     .then((response) => response.json())
    //     .then((response) => setData(response))
    // }, [])
  return (
    <>
    <div className='bg-gray-500 text-white text-3xl text-center p-4'>Github Followers : {data.followers}
    <img src={data.avatar_url} className="w-300 rounded-full" alt="Avatar" />
    </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hashirnkhan24')
    return response.json()
}