import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

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

const Animatemany = ({
     children,
     whenIsDone,
     containerStyle = {},
     spring = false,
     left = false,
     right = false,
     top = false,
     bottom = false,
     zoom = false,
     fade = false,
     simultaneously = false,
     duration = 350,
     size = 200,
     delay = 0,
}: AnimatemanyProps) => {

     const process = children.map((child, i) => useRef<Animated.Value>(new Animated.Value(0)).current);

     const scale = children.map((child, i) => process[i].interpolate({ inputRange: [0, 1], outputRange: [0.01, 1] }));
     const translateY = children.map((child, i) => process[i].interpolate({ inputRange: [0, 1], outputRange: [top ? -size : size, 0] }));
     const opacity = children.map((child, i) => process[i].interpolate({ inputRange: [0, 1], outputRange: [0, 1] }));
     const translateX = children.map((child, i) => process[i].interpolate({ inputRange: [0, 1], outputRange: [left ? -size : size, 0] }));

     useEffect(() => {
          const animations = process.map((process, i) => (
               spring ?
                    Animated.spring(process, {
                         toValue: 1,
                         delay: i === 0 ? delay : 0,
                         bounciness: 1,
                         speed: .6,
                         useNativeDriver: true
                    })
                    :
                    Animated.timing(process, {
                         toValue: 1,
                         duration,
                         delay: i === 0 ? delay : 0,
                         useNativeDriver: true
                    })
          ));
          (simultaneously ? Animated.parallel(animations) : Animated.stagger(80, animations)).start(whenIsDone);
     }, [])

     return (
          <React.Fragment>
               {
                    children.map((component, i) => (
                         <Animated.View
                              style={[
                                   containerStyle,
                                   {
                                        opacity: fade ? opacity[i] : 1,
                                        transform: [
                                             { translateX: right || left ? translateX[i] : 0 },
                                             { translateY: bottom || top ? translateY[i] : 0 },
                                             { scale: zoom ? scale[i] : 1 }
                                        ]
                                   }
                              ]}
                              key={i}
                         >
                              {component}
                         </Animated.View>
                    ))
               }
          </React.Fragment>
     )
}

export default Animatemany;
