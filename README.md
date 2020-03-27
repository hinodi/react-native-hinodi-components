[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Version](https://img.shields.io/npm/v/react-native-hinodi-components.svg)](https://www.npmjs.com/package/react-native-hinodi-components)
[![npm](https://img.shields.io/npm/dt/react-native-hinodi-components.svg)](https://www.npmjs.com/package/react-native-hinodi-components)

# react-native-hinodi-components

React Native common components for iOS + Android

## Component API

### [DebounceTouchable]

## Installation

`yarn add react-native-hinodi-components`

or

`npm install react-native-hinodi-components`

### Debounce Touchable in React Native

## DebounceTouchable

```js
import { DebounceTouchable } from 'react-native-hinodi-components';

<DebounceTouchable>
    <Text>Click me!</Text>
</DebounceTouchable>;
```

## Props

| Name     | Description                                                                 | Type   | Required | Default Value |
| :------- | :-------------------------------------------------------------------------- | :----- | :------: | :-----------: |
| onPress  | Called when the touch is released                                           | Func   |          |   () => {}    |
| waitTime | Delay in ms, from latest onPress                                            | Number |          |      300      |
| children | The children to render inside this component                                | Node   |          |    `null`     |
| style    | The custom styling which will be applied to the container of the `children` | Style  |          |    `null`     |

## Author

[Dinh Huynh](https://www.facebook.com/hinodi1998)

## License

MIT
