import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface AnimateProps {
    children: JSX.Element | JSX.Element[];
    onAnimationEnd?: (() => void);
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
declare const Animate: React.MemoExoticComponent<({ children, onAnimationEnd, containerStyle, left, right, top, bottom, zoom, fade, duration, size, delay, spring, simultaneously }: AnimateProps) => JSX.Element>;
export default Animate;
