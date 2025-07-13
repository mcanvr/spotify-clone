import { GestureResponderEvent } from 'react-native';

export interface BadgeProps {
  isActive?: boolean;
  text: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  isDisabled?: boolean;
}
