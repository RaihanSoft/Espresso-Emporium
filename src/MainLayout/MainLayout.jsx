import { useLoaderData } from "react-router-dom"
import CoffeeCard from "../Components/CoffeeCard/CoffeeCard"

const MainLayout = () => {
  const coffees = useLoaderData()

  return (
    <div>

      {
        coffees.map((coffee, index) => <CoffeeCard key={index} coffee={coffee} />)
      }
    </div>
  )
}

export default MainLayout
