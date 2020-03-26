import * as React from "react";
import { TouchableOpacity } from "react-native";

function debounce(func, wait, immediate = true) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export default class DebounceTouchable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPressDebounce = debounce(
      props.onPress ? props.onPress : () => {},
      300
    );
  }
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        onPress={this.onPressDebounce}
        activeOpacity={1}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
