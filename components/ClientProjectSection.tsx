import { ClientProjects } from '@/data'
import React from 'react'
import { ScrollView, View } from 'react-native'
import ClientProjectCard from './ClientProjectCard'
import SectionTitle from './SectionTitle'

export default function ClientProjectSection() {
    return (
        <View className=" py-20 px-4">
            <SectionTitle title="Businesses I've Helped" />

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row">
                    {ClientProjects.map((project, index) => (
                        <View key={index} className="">
                            <ClientProjectCard project={project} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
} 