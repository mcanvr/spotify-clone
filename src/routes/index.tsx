import { Avatar, Badge, HomeItem } from '@/components';
import { HOME_ITEMS } from '@/data/home-items';
import { cn } from '@/utils/classnames';
import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'music' | 'podcasts'>('all');

  return (
    <View className="flex-1 bg-dark-background">
      <ScrollView contentContainerClassName="pt-safe-offset-10 flex-grow-1 pb-safe px-5">
        <View className="flex-row items-center mb-6 gap-5">
          <Avatar name="S" onPress={() => {}} />
          <View className="flex-row items-center gap-2">
            <Badge text="All" isActive={activeTab === 'all'} onPress={() => setActiveTab('all')} />
            <Badge
              text="Music"
              isActive={activeTab === 'music'}
              onPress={() => setActiveTab('music')}
            />
            <Badge
              text="Podcasts"
              isActive={activeTab === 'podcasts'}
              onPress={() => setActiveTab('podcasts')}
            />
          </View>
        </View>
        <View className="flex-row">
          <FlashList
            data={HOME_ITEMS}
            keyExtractor={(item, index) => item.id.toString()}
            numColumns={2}
            renderItem={({ item, index }) => (
              <View
                className={cn('flex-1', index % 2 === 0 ? 'pr-3' : '', index < 4 ? 'mb-3' : '')}>
                <HomeItem item={item} onPress={() => {}} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
