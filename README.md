# Experiment

## Example from react-native-paper

Tried to use example from here https://github.com/callstack/react-native-paper/blob/main/example/src/index.tsx, but I got error:

```
Uncaught Error: useAnimatedStyle was used without a dependency array or Babel plugin. Please explicitly pass a dependency array, or enable the Babel/SWC plugin.

For more, see the docs: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/web-support#web-without-a-babel-plugin
```

Plus this one https://github.com/software-mansion/react-native-reanimated/discussions/5007.

## Example 2

After bilion of errors I was able to create page with bottom navigation. I want to replicate something more interesting, like https://blog.logrocket.com/designing-custom-ui-using-react-native-paper/#introduction-react-native-paper or https://callstack.github.io/react-native-paper/docs/showcase

## Warnings

```
"textAlignVertical" style is deprecated. Use "verticalAlign". index.js:24:12
props.pointerEvents is deprecated. Use style.pointerEvents index.js:24:12
accessibilityRole is deprecated. Use role. index.js:24:12
"transform" style array value is deprecated. Use space-separated string functions, e.g., "scaleX(2) rotateX(15deg)". index.js:24:12
selectable prop is deprecated. Use styles.userSelect. index.js:24:12
focusable is deprecated. index.js:24:12
Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md
```
