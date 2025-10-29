import React from 'react'

const App = () => {
  const card = [
    {
      title: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
      imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
      imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
      imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
      imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
  ]
  if(!card || card.length === 0) {
    return <p>No cards available.</p>
  }
  return (
    <div className="container mx-auto">
      {card.map((item, index) => (
        <div key={index} className="max-w-2xl mx-auto p-4">
          <a href="#" className="block overflow-hidden rounded-lg">
            <img 
              alt={item.title} 
              src={item.imageUrl}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-sm text-gray-700">
              {item.description}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default App
