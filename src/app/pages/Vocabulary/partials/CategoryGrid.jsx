import React from 'react'
import CategoryCard from './CategoryCard'

export default function CategoryGrid  ({ categories, setView, setSelectedCategory }) {return(
  <div className="grid border  rounded-lg border-gray-300 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
  {categories.map(category => (
        <CategoryCard 
          key={category.id} 
          {...category} 
          setView={setView}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
  </div>
)}