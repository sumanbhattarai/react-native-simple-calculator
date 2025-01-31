import React, { useCallback, memo } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { showError } from "./toast";

const buttons: Array<{ row: number; elements: Array<string> }> = [
  { row: 1, elements: ["AC", "/", "*", "DEL"] },
  { row: 2, elements: ["1", "2", "3", "-"] },
  { row: 3, elements: ["4", "5", "6", "+"] },
  { row: 4, elements: ["7", "8", "9", "."] },
  { row: 5, elements: ["0", "="] },
];

const operator: Array<string> = ["/", "+", "-", "*", "=", "."];

interface Props {
  displayValue: string;
  updateDisplayValue: (val: string) => void;
}

const Calculator = ({ displayValue, updateDisplayValue }: Props) => {
  const handlePress = useCallback(
    (value: string) => {
      switch (value) {
        case "AC":
          // Clears the screen.
          updateDisplayValue("");
          return;
        case "DEL":
          if (displayValue) {
            // Removes the last element.
            const temp = displayValue.slice(0, -1);
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
            if (!operator.some((el) => displayValue.includes(el))) {
              // if the expression doesn't contain any operator, no need to calculate.
              return;
            }
            // eval does the mathematical expression's calculation.
            //[ALERT] eval is dangerous. It needs to be checked very well before production.
            // eslint-disable-next-line no-eval
            const result = String(eval(displayValue));
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
          if (
            operator.includes(displayValue.slice(-1)) &&
            operator.includes(value)
          ) {
            // Two operators cannot be consecutive.
            return;
          }
          if (displayValue.includes(".") && value === ".") {
            // If a decimal is already present in the display, another decimal can only be added if an operator separates it as part of a different number.
            const decimalIndex = displayValue.lastIndexOf(".");
            let operatorExceptDecimalIndex = 0;
            operator.forEach((el) => {
              if (el === "." || el === "=") {
                return;
              }
              const temp = displayValue.lastIndexOf(el);
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
    },
    [displayValue, updateDisplayValue]
  );

  return (
    <View style={styles.container}>
      {buttons.map((el) => (
        <View key={el.row} style={styles.row}>
          {el.elements.map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.eachButton}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.value}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default memo(Calculator);
