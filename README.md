# react-native-entrance-animation
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-blue.svg) &nbsp;&nbsp;
![MIT License](https://img.shields.io/npm/l/react-native-range-slider-expo?color=red)
### Simple entrance animation for React-Native components
<br/><br/>
## Getting started
`npm i react-native-entrance-animation`

<br/><br/>
## Usage
#### Examples

<!-- <div style="display:flex;flex-direction:row">
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1600198194/demo_tzty07.gif" height="500" width="280" />
</div>
<br/>
<div style="display:flex;flex-direction:row">
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1595960302/image2_eqbpiw.png" style="height:100%;width:100%"/>
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1595960364/image_daoab0.png" style="height:100%;width:100%"/>
</div> -->

<div>
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1605209433/entrance-multi-animation_aabhsg.gif" height="500" width="280" />
</div>

```javascript
import { AnimateMany } from 'react-native-entrance-animation';
```
```javascript
     return (
          <AnimateMany right fade duration={1500} containerStyle={styles.container}>
               <View style={styles.itemContainer}><Text style={{ color: 'white' }}>item 1</Text></View>
               <View style={styles.itemContainer}><Text style={{ color: 'white' }}>item 2</Text></View>
               <View style={styles.itemContainer}><Text style={{ color: 'white' }}>item 3</Text></View>
               <View style={styles.itemContainer}><Text style={{ color: 'white' }}>item 4</Text></View >
               <View style={styles.itemContainer}><Text style={{ color: 'white' }}>item 5</Text></View >
               <View style={styles.itemContainer}><Text style={{ color: 'white' }}>item 6</Text></View >
          </AnimateMany >
     );
```
```javascript
const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
     },
     itemContainer: {
          height: 40,
          width: '45%',
          backgroundColor: 'steelblue',
          justifyContent: 'center',
          alignItems: 'center'
     }
})
```
<br/>

<div>
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1605209434/entrance-animation_zvdclv.gif" height="500" width="280" />
</div>

```javascript
import { Animate } from 'react-native-entrance-animation';
```
```javascript
return (
          <View style={styles.container}>
               <Animate top
                    containerStyle={styles.itemContainer}
               >
                    <Text style={{ color: 'white' }}>item 1</Text>
               </Animate>
               <Animate left
                    containerStyle={styles.itemContainer}
               >
                    <Text style={{ color: 'white' }}>item 2</Text>
               </Animate>
               <Animate right
                    containerStyle={styles.itemContainer}
               >
                    <Text style={{ color: 'white' }}>item 3</Text>
               </Animate>
               <Animate bottom
                    containerStyle={styles.itemContainer}
               >
                    <Text style={{ color: 'white' }}>item 4</Text>
               </Animate>
               <Animate fade delay={500}
                    containerStyle={styles.itemContainer}
               >
                    <Text style={{ color: 'white' }}>item 5</Text>
               </Animate>
               <Animate zoom delay={1000}
                    containerStyle={styles.itemContainer}
               >
                    <Text style={{ color: 'white' }}>item 6</Text>
               </Animate>
          </View >
     );
```
```javascript
const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: 10
     },
     itemContainer: {
          height: 40,
          width: '45%',
          backgroundColor: 'steelblue',
          justifyContent: 'center',
          alignItems: 'center'
     }
})
```

<br/>

## API - Animate
| Property | Type | Required | Default |
| :---     |:----:|  :-----: | :-----: | 
| containerStyle | style | no | - |
| left | boolean | no | false |
| right | boolean | no | false |
| top | boolean | no | false |
| bottom | boolean | no | false |
| zoom | boolean | no | false |
| fade | boolean | no | false |
| spring | boolean | no | false |
| duration | number | no | 350 |
| size | number | no | 120 |
| delay | number | no | 0 |
| onAnimationEnd | callback | no | - |

## API - AnimateMany
| Property | Type | Required | Default |
| :---     |:----:|  :-----: | :-----: | 
| containerStyle | style | no | - |
| left | boolean | no | false |
| right | boolean | no | false |
| top | boolean | no | false |
| bottom | boolean | no | false |
| zoom | boolean | no | false |
| fade | boolean | no | false |
| spring | boolean | no | false |
| duration | number | no | 350 |
| size | number | no | 120 |
| delay | number | no | 0 |
| onAnimationEnd | callback | no | - |
| simultaneously | boolean | no | false |

<br/><br/>

## License
This project is licensed under the MIT License
