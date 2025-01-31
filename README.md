# 📱 react-native-simple-calculator

A **simple and customizable calculator** component for **React Native** that performs **basic arithmetic operations**.  
Supports **addition (+), subtraction (-), multiplication (\*), and division (/)** with a **clean UI and customizable styling options**.

---

## 📦 Installation

### **For React Native CLI**

```sh
npm install react-native-simple-calculator
```

or with Yarn:

```sh
yarn add react-native-simple-calculator
```

### **For Expo**

```sh
expo install react-native-simple-calculator
```

Expo will install the compatible dependencies automatically.

---

## 🚀 **Usage Example**

```tsx
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calculator } from "react-native-simple-calculator";

export default function App() {
  const [value, setValue] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text style={styles.value}>Value: {value}</Text>
      <Calculator
        displayValue={value}
        updateDisplayValue={(val) => setValue(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  value: {
    fontSize: 16,
    marginVertical: 24,
    fontWeight: "bold",
  },
});
```

---

## 🎨 **Customization**

You can customize the **initial display value**, **button styles**, and **text styles**.

### **🔹 Available Props**

| Prop Name            | Type                       | Default     | Description                                                 |
| -------------------- | -------------------------- | ----------- | ----------------------------------------------------------- |
| `displayValue`       | `string`                   | `"0"`       | Provide your **initial value** to the Calculator component. |
| `updateDisplayValue` | `(val: string) => void`    | `undefined` | Function executed when the **result is calculated**.        |
| `buttonStyle?`       | `ViewStyle \| ViewStyle[]` | `{}`        | Custom **styles for calculator buttons**.                   |
| `buttonTextStyle?`   | `TextStyle \| TextStyle[]` | `{}`        | Custom **styles for button text**.                          |

---

## 🔧 **Example with Custom Props**

```tsx
<Calculator
  displayValue="10"
  updateDisplayValue={(val) => console.log("New Result:", val)}
  buttonStyle={{ backgroundColor: "#FF5733", borderRadius: 10 }}
  buttonTextStyle={{ color: "#FFF", fontWeight: "bold" }}
/>
```

---

## 🎥 **DEMO**

![Demo](https://github.com/user-attachments/assets/cfbd79a9-aaba-4bc2-97c7-4ff30ffe36b5)

---

## 💡 **Compatibility**

✅ **React Native** `>=0.64.0`  
✅ **React** `>=17.0.0`  
✅ **Expo Support** ✔

---

## 🛠️ **Development & Contribution**

Feel free to **open issues** or contribute by **creating a pull request**.  
To test the package locally:

```sh
git clone https://github.com/your-username/react-native-simple-calculator.git
cd react-native-simple-calculator
```

---

## 📝 **License**

This project is **MIT Licensed**.  
You are free to **use, modify, and distribute** it.

---

## ⭐ **Support**

If you find this package useful, **please ⭐ star the repo** to support the project!

---

### 🔗 **Links**

- [NPM Package](https://www.npmjs.com/package/react-native-simple-calculator)
- [GitHub Repository](https://github.com/sumanbhattarai/react-native-simple-calculator)
- [Issues & Bugs](https://github.com/sumanbhattarai/react-native-simple-calculator/issues)

---

## **🚀 Summary**

- **✅ Simple calculator for basic arithmetic (+, -, ×, ÷)**
- **✅ Fully customizable UI (theme, buttons, colors, styles)**
- **✅ Works with React Native CLI & Expo**
- **✅ Supports props for display value, result updates, and button styling**
