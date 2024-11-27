import { useLoaderData } from "react-router-dom"
import CoffeeCard from "../Components/CoffeeCard/CoffeeCard"
import { useState } from "react"

const MainLayout = () => {
  const loadedcoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedcoffees)

  return (
    <div>

      {
        coffees.map((coffee, index) => <CoffeeCard key={index} setCoffees={setCoffees} coffees={coffees} coffee={coffee} />)
      }
    </div>
  )
}

export default MainLayout
