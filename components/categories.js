import {  ScrollView, Image} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    
  <ScrollView 
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
      
      {/* Category Card */}
 
      <CategoryCard
        imgUrl="https://pbs.twimg.com/media/FS_76LZXEAEG6xh.jpg"  title="testing dogo 1"
        />
      <CategoryCard
        imgUrl="https://pbs.twimg.com/media/FS_76LZXEAEG6xh.jpg"  title=" testing dogo 2 "
        />
      <CategoryCard
        imgUrl="https://pbs.twimg.com/media/FS_76LZXEAEG6xh.jpg"  title="testing doo 3 "
        />
         <CategoryCard
        imgUrl="https://pbs.twimg.com/media/FS_76LZXEAEG6xh.jpg"  title="testing doo 3 "
        />
         <CategoryCard
        imgUrl="https://pbs.twimg.com/media/FS_76LZXEAEG6xh.jpg"  title="testing doo 3 "
        />
         <CategoryCard
        imgUrl="https://pbs.twimg.com/media/FS_76LZXEAEG6xh.jpg"  title="testing doo 3 "
        />
 
  </ScrollView>
  )
}