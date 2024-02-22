import {  FlatList, Text, TouchableOpacity, View , Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

const data=[
    {
        id:"123",
        title:"Get a ride",
        images:"https://links.papareact.com/3pn",
        screens:"MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        images:"https://links.papareact.com/28w",
        screens:"EatScreen",
    }
]

const NavOptions = () => {
  return (
   <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={ ({ item}) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}>
            <View>
                <Image 
                    style={{height:120 , width:120 ,}}
                    source={{
                        uri:item.images
                }}/>
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                 style={tw`p-2 bg-black rounded-full  w-10 mt-4`}
                name='arrowright' color='white' type="antdesign"/>
            </View>
        </TouchableOpacity>
    )}
   
   
   />
  )
}

export default NavOptions

