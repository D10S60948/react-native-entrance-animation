import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, UIManager, ViewStyle } from 'react-native';

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

const Animate = React.memo(({
     children,
     onAnimationEnd,
     containerStyle = {},
     left = false,
     right = false,
     top = false,
     bottom = false,
     zoom = false,
     fade = false,
     duration = 350,
     size = 120,
     delay = 0,
     spring = false,
     simultaneously = false
}: AnimateProps) => {

     const process = useRef<Animated.Value>(new Animated.Value(0)).current;
     const inputRange = [0, 1];

     const scale = process.interpolate({ inputRange, outputRange: [0.01, 1] })
     const translateY = process.interpolate({ inputRange, outputRange: [top ? -size : size, 0] })
     const opacity = process.interpolate({ inputRange, outputRange: [0, 1] });
     const translateX = process.interpolate({ inputRange, outputRange: [left ? -size : size, 0] });

     useEffect(() => {
          spring ?
               Animated.spring(process, {
                    toValue: 1,
                    delay,
                    bounciness: 1,
                    speed:.6,
                    useNativeDriver: true
               }).start(onAnimationEnd)
               :
               Animated.timing(process, {
                    toValue: 1,
                    duration, delay,
                    useNativeDriver: true
               }).start(onAnimationEnd);
     }, []);

     return (
          <Animated.View
               style={[
                    containerStyle,
                    {
                         opacity: fade ? opacity : 1,
                         transform: [
                              { translateY: top || bottom ? translateY : 0 },
                              { translateX: left || right ? translateX : 0 },
                              { scale: zoom ? scale : 1 }
                         ]
                    }
               ]}
          >
               {children}
          </Animated.View>
     )
})

export default Animate; 
