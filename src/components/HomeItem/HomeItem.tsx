import { HomeItemProps } from '@/components/HomeItem/HomeItem.types';
import { useStyledComponent } from '@/hooks/useStyledComponent';
import { cn } from '@/utils/classnames';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export default function HomeItem({ item, onPress }: HomeItemProps) {
  const StyledImage = useStyledComponent(Image);

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'h-16 rounded-md bg-[#44444473] flex-row active:opacity-40 active:scale-95 transition-all'
      )}>
      <View className="h-16 rounded-tl-md rounded-bl-md w-16 relative">
        <StyledImage className="h-full w-full absolute" source={item.image} />
      </View>
      <View className="flex-1 h-16 flex-row items-center px-3">
        <Text numberOfLines={2} className="text-white font-bold text-sm flex-1">
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
}
