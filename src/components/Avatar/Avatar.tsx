import { AvatarProps } from '@/components/Avatar/Avatar.types';
import { Pressable, Text } from 'react-native';

export default function Avatar({ name, isDisabled, onPress }: AvatarProps) {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={isDisabled ? null : onPress}
      className="h-10 w-10 rounded-full bg-orange-500 flex-row items-center justify-center active:opacity-40 active:scale-95 transition-all">
      <Text className="font-extrabold text-xl text-black">
        {name.length > 1 ? name[0].toLocaleUpperCase() : name.length === 1 ? name : '?'}
      </Text>
    </Pressable>
  );
}
