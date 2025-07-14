import { BadgeProps } from '@/components/Badge/Badge.types';
import { cn } from '@/utils/classnames';
import { Pressable, Text } from 'react-native';

export default function Badge({ text, isActive = false, onPress, isDisabled = false }: BadgeProps) {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={isDisabled ? null : onPress}
      className={cn(
        'px-4 h-9 rounded-full items-center justify-center active:opacity-45 active:scale-95 transition-all',
        {
          'bg-brand': isActive,
          'bg-[#353535]': !isActive,
        }
      )}>
      <Text
        className={cn('text-sm', {
          'font-outfit-bold text-black': isActive,
          'font-outfit-medium text-white': !isActive,
        })}>
        {text}
      </Text>
    </Pressable>
  );
}
