import { ItemNavigation } from "./ItemNavigation"
import { MdAirplanemodeActive, MdOutlineRestaurant } from "react-icons/md";
import { FaBed, FaBusAlt } from "react-icons/fa";
export const Navigation = () => {


    const links = [
        { url: '/', label: 'Hoteles', icon: FaBed },
        { url: '/flights', label: 'Vuelos',  icon: MdAirplanemodeActive  },
        { url: '/transports', label: 'Transporte',  icon: FaBusAlt  },
        { url: '/foods', label: 'Comidas',  icon: MdOutlineRestaurant  },
    ]
  return (
   
        <nav className="flex px-3 mt-4 sm:px-2">
            <ul className="grid gap-x-4 lg:gap-x-10 grid-cols-4 w-full justify-between text-center">
            {links.map(({ url, label, icon }) => (
                <ItemNavigation url={url} label={label} icon={icon} isActive={true}  />     
            ))
            }
            </ul>
        </nav>

  )
}