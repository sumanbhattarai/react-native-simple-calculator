'use strict';

var React = require('react');
var reactNative = require('react-native');

var styles = reactNative.StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row"
  },
  eachButton: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    borderRadius: 12,
    backgroundColor: "#542e71"
  },
  value: {
    color: "#ffffff",
    fontWeight: "bold"
  }
});

var showMessage = function showMessage(message, type) {
  if (reactNative.Platform.OS === "android") {
    reactNative.ToastAndroid.showWithGravity(message, reactNative.ToastAndroid.SHORT, reactNative.ToastAndroid.BOTTOM);
  } else {
    reactNative.Alert.alert("Failed!", message);
  }
};
var showError = function showError(message) {
  showMessage(message);
};

var buttons = [{
  row: 1,
  elements: ["AC", "/", "*", "DEL"]
}, {
  row: 2,
  elements: ["1", "2", "3", "-"]
}, {
  row: 3,
  elements: ["4", "5", "6", "+"]
}, {
  row: 4,
  elements: ["7", "8", "9", "."]
}, {
  row: 5,
  elements: ["0", "="]
}];
var operator = ["/", "+", "-", "*", "=", "."];
var Calculator = function Calculator(_ref) {
  var displayValue = _ref.displayValue,
    updateDisplayValue = _ref.updateDisplayValue;
  var handlePress = React.useCallback(function (value) {
    switch (value) {
      case "AC":
        // Clears the screen.
        updateDisplayValue("");
        return;
      case "DEL":
        if (displayValue) {
          // Removes the last element.
          var temp = displayValue.slice(0, -1);
          updateDisplayValue(temp);
        }
        return;
      case "=":
        if (displayValue) {
          if (operator.includes(displayValue.slice(-1))) {
            // Last element cannot be an operator.
            showError("Please, complete the expression.");
            return;
          }
          if (!operator.some(function (el) {
            return displayValue.includes(el);
          })) {
            // if the expression doesn't contain any operator, no need to calculate.
            return;
          }
          // eval does the mathematical expression's calculation.
          //[ALERT] eval is dangerous. It needs to be checked very well before production.
          // eslint-disable-next-line no-eval
          var result = String(eval(displayValue));
          if (result === "Infinity") {
            showError("Inifity result are not allowded.");
            return;
          }
          updateDisplayValue(result);
        }
        return;
      default:
        if (!displayValue && operator.includes(value)) {
          // First element can't be an operator.
          return;
        }
        if (operator.includes(displayValue.slice(-1)) && operator.includes(value)) {
          // Two operators cannot be consecutive.
          return;
        }
        if (displayValue.includes(".") && value === ".") {
          // If a decimal is already present in the display, another decimal can only be added if an operator separates it as part of a different number.
          var decimalIndex = displayValue.lastIndexOf(".");
          var operatorExceptDecimalIndex = 0;
          operator.forEach(function (el) {
            if (el === "." || el === "=") {
              return;
            }
            var temp = displayValue.lastIndexOf(el);
            if (temp > operatorExceptDecimalIndex) {
              operatorExceptDecimalIndex = temp;
            }
          });
          if (operatorExceptDecimalIndex < decimalIndex) {
            return;
          }
        }
        updateDisplayValue(displayValue + value);
    }
  }, [displayValue, updateDisplayValue]);
  return /*#__PURE__*/React.createElement(reactNative.View, {
    style: styles.container
  }, buttons.map(function (el) {
    return /*#__PURE__*/React.createElement(reactNative.View, {
      key: el.row,
      style: styles.row
    }, el.elements.map(function (value) {
      return /*#__PURE__*/React.createElement(reactNative.TouchableOpacity, {
        key: value,
        style: styles.eachButton,
        onPress: function onPress() {
          return handlePress(value);
        }
      }, /*#__PURE__*/React.createElement(reactNative.Text, {
        style: styles.value
      }, value));
    }));
  }));
};
var index = /*#__PURE__*/React.memo(Calculator);

exports.Calculator = index;
//# sourceMappingURL=index.js.map
