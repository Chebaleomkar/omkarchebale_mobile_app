import { clientReviews } from '@/data'
import React from 'react'
import { ScrollView, View } from 'react-native'
import ReviewCard from './ReviewCard'
import SectionTitle from './SectionTitle'

export default function ClientReviewSection() {
    return (
        <View className=" py-20 px-4">
            <SectionTitle title="What Clients Say" />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                {clientReviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </ScrollView>
        </View>
    )
}