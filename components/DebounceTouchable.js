import * as React from 'react';
import { TouchableOpacity, ViewPropTypes, View } from 'react-native';
import PropTypes from 'prop-types';

import { debounce } from '../utils/function';

// compatibility for react-native versions < 0.44
const ViewPropTypesStyle = ViewPropTypes ? ViewPropTypes.style : View.propTypes.style;

export default class DebounceTouchable extends React.PureComponent {
    static propTypes = {
        onPress: PropTypes.func,
        waitTime: PropTypes.number,
        children: PropTypes.node,
        activeOpacity: PropTypes.number,
        style: ViewPropTypesStyle,
    };

    static defaultProps = {
        onPress: () => {},
        waitTime: 300,
        children: null,
        style: null,
        activeOpacity: 0.2,
    };

    constructor(props) {
        super(props);
        this.onPressDebounce = debounce(props.onPress, props.waitTime);
    }
    render() {
        return (
            <TouchableOpacity {...this.props} onPress={this.onPressDebounce}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}
