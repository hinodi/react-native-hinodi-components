import React from 'react';
import ReactNative from 'react-native';

export interface DebounceTouchableProps {
    /**
     * Called when the touch is released,
     * but not if cancelled (e.g. by a scroll that steals the responder lock).
     */
    onPress?: () => void;
    /**
     * Delay in ms, from latest onPress
     * Defaults to 300
     */
    waitTime?: number;
    children?: React.ReactNode;
    activeOpacity?: number;
    style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
}

export default class DebounceTouchable extends React.Component<DebounceTouchableProps, any> {
    render(): JSX.Element;
}
