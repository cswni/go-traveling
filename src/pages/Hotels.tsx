import { Title } from "../components/Title"

export const Hotels = () => {
  let hotels = [
    {
      name: 'Seminoles Hotel',
      starring: 4,
      price: 100,
      image: 'images/hotels/seminole.jpg'
    },
    {
      name: 'Princess Hilton',
      starring: 4.5,
      price: 125,
      image: 'images/hotels/hilton.jpg'
    },
    {
      name: 'Express Holiday Inn',
      starring: 4.5,
      price: 125,
      image: 'images/hotels/express.jpg'
    },{
      name: 'Crown Plaza',
      starring: 3.9,
      price: 95,
      image: 'images/hotels/crown.jpg'
    },
  ]
  return (
    <div >
       <Title texto="Busca un hotel cerca de ti" />
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="overflow-hidden bg-white rounded-lg shadow-md hover:cursor-pointer">
              <img src={hotel.image} alt={hotel.name} className="object-cover object-center w-full h-56" />
              <div className="py-4">
                <h3 className="flex justify-between mb-1 text-xs tracking-widest text-gray-500 title-font">{hotel.name}
                <span>{hotel.starring} estrellas</span>
                </h3>
                <p className="mt-1">${hotel.price}</p>
                <div className="flex items-center">
                  
                  <span className="flex items-center py-1 pr-3 text-sm leading-none text-gray-400">
                    
                  </span>
                  </div>
              </div>
            </div>
          ))}
          </div>
    </div>
  )
}