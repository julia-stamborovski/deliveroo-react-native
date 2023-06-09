import {  ScrollView } from 'react-native';
import React , {useState, useEffect} from 'react';
import CategoryCard from './CategoryCard';
import createClient from '../sanity';
import { urlFor } from '../sanity';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    createClient.fetch(
      `  *[_type == "category"]
  `).then((data) => {
    setCategories(data);
  })
  }, [])
  return (
    
  <ScrollView 
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
      
      {/* Category Card */}
    {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
    ))}

      
 
  </ScrollView>
  )
}