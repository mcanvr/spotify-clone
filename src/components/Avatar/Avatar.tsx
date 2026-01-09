import { AvatarProps } from '@/components/Avatar/Avatar.types';
import { Case, Switch } from '@/utils/switch-case';
import { Pressable, Text, View } from 'react-native';

export default function Avatar({ name, isDisabled, onPress, showIndicator = false }: AvatarProps) {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={isDisabled ? null : onPress}
      className="h-10 w-10 rounded-full bg-orange-500 flex-row items-center justify-center active:scale-95 transition-all relative">
      <Text className="font-outfit-bold text-xl text-black">
        {name.length > 1 ? name[0].toLocaleUpperCase() : name.length === 1 ? name : '?'}
      </Text>
      <Switch>
        <Case condition={showIndicator === true}>
          <View className="h-3.5 w-3.5 rounded-full absolute bg-blue-400 top-0 -right-1 border-[3px] border-dark-background"></View>
        </Case>
      </Switch>
    </Pressable>
  );
}
