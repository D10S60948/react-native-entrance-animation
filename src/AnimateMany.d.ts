/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
interface AnimatemanyProps {
    children: JSX.Element[];
    whenIsDone?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    zoom?: boolean;
    fade?: boolean;
    duration?: number;
    size?: number;
    delay?: number;
    spring?: boolean;
    simultaneously?: boolean;
}
declare const Animatemany: ({ children, whenIsDone, containerStyle, spring, left, right, top, bottom, zoom, fade, simultaneously, duration, size, delay, }: AnimatemanyProps) => JSX.Element;
export default Animatemany;
