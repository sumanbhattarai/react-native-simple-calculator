import React from "react";
interface Props {
    displayValue: string;
    updateDisplayValue: (val: string) => void;
}
declare const Calculator: ({ displayValue, updateDisplayValue }: Props) => React.JSX.Element;
export default Calculator;
