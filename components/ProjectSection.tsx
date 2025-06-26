import { projects } from '@/data'
import React from 'react'
import { ScrollView, View } from 'react-native'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

export default function ProjectSection() {
    return (
        <View className=" py-20 px-8">
            <SectionTitle title="Featured Projects" />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                <View className='flex-row px-4' >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}