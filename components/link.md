# Link

The purpose of this component is to provide a hyperlink kind of functionality via a component. This component is only compatible with React-Navigation, and navigates across applications just via the screen name. You can either pass children to this component or simple provide a text property which will use that text to create a link .

_Since this component uses Touchable Highlight to provide onPress behaviour, Don't use Touchable Highlight in the children._

## Usage

```jsx
<Link link="editProfile"
   style={[styles.button, styles.editBtn]}
   textStyle={[styles.buttonText, styles.editText]}>
    <Text><Icon type="ionicons" name='md-create' style={[styles.editIcon]}/> Edit</Text>
</Link>
```

## Supported Properties

### link

link defines the name of screen which is defined in the React Navigation setup in js/routing folder.

### textStyle

If text property is used, This property is used to customize styling of the text.

### style

Style for the TouchableHighlight created by link.

### onPress

onPress callback which is called onPress.

