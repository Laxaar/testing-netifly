# Image Picker

The purpose of this component is to provide image selection functionality in mobiles via Camera Capture and Gallery Selection.

_Since this component uses Touchable Highlight to provide onPress behaviour, Don't use Touchable Highlight in the children._

## Usage

```jsx
<ImagePicker onImageSelected = {this.changeImage.bind(this)}>
   <Link style={[styles.changeImageLink]}>
       <Text style={[styles.text]}><Icon type="ionicons" name='md-create'/> Change Image</Text>
   </Link>
</ImagePicker>
```

## Supported Properties

### onImageSelected

Callback to be called when image is selected. The base64 version of the image is passed as an argument to the callback.

### onPress

Callback on click of children passed to this component.

