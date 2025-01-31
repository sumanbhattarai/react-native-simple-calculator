import React from "react";
import { ViewStyle, TextStyle } from "react-native";
interface Props {
    displayValue: string;
    updateDisplayValue: (val: string) => void;
    buttonStyle?: ViewStyle | ViewStyle[];
    buttonTextStyle?: TextStyle | TextStyle[];
}
declare const Calculator: ({ displayValue, updateDisplayValue, buttonStyle, buttonTextStyle, }: Props) => React.JSX.Element;
export default Calculator;
