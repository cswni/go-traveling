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
       <h1 className="text-lg font-semibold">Busca un hotel cerca de ti</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {hotels.map((hotel) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:cursor-pointer">
              <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover object-center" />
              <div className="py-4">
                <h3 className="text-gray-500 text-xs flex justify-between tracking-widest title-font mb-1">{hotel.name}
                <span>{hotel.starring} estrellas</span>
                </h3>
                <p className="mt-1">${hotel.price}</p>
                <div className="flex items-center">
                  
                  <span className="text-gray-400 flex items-center leading-none text-sm pr-3 py-1">
                    
                  </span>
                  </div>
              </div>
            </div>
          ))}
          </div>
    </div>
  )
}