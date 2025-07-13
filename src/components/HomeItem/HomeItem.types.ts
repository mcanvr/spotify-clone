import { SharedRefType } from 'expo';
import { ImageSource } from 'expo-image';
import { GestureResponderEvent } from 'react-native';

export interface HomeItemProps {
  item: {
    image: ImageSource | string | number | ImageSource[] | string[] | SharedRefType<'image'> | null;
    name: string;
  };
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}
