import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';

const FeaturedRows = ({ title, description, id }) => {
  return (
  <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
    </View>
      <Text className="text-xs text-gray-500 p-4">{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/* restaurants cards */}
        <RestaurantCard 
            id={123}
            imgUrl="https://i.kym-cdn.com/entries/icons/original/000/027/707/henry.png"
            title="Yol Dog"
            rating={4.5}
            genre="Dog" 
            address="123 Main St"
            short_description="This is a short description"
            dishes={[]}
            long={20}
            lat={0}
        />
         <RestaurantCard 
            id={123}
            imgUrl="https://i.kym-cdn.com/entries/icons/original/000/027/707/henry.png"
            title="Yol Dog"
            rating={4.5}
            genre="Dog" 
            address="123 Main St"
            short_description="This is a short description"
            dishes={[]}
            long={20}
            lat={0}
        />
         <RestaurantCard 
            id={123}
            imgUrl="https://i.kym-cdn.com/entries/icons/original/000/027/707/henry.png"
            title="Yol Dog"
            rating={4.5}
            genre="Dog" 
            address="123 Main St"
            short_description="This is a short description"
            dishes={[]}
            long={20}
            lat={0}
        />
      </ScrollView>
  </View>
  );
};

export default FeaturedRows;