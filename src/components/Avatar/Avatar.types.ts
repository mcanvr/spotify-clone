import { GestureResponderEvent } from 'react-native';

export interface AvatarProps {
  name: string;
  isDisabled?: boolean;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}
