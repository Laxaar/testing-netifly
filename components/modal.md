# Modal

This component enables you to open any scene via a modal window. All the modal scenes are defined by the set ModalScenes method. In Arivaa, it is normally done inside _routes.js_ file. Ituses React-Navigation and react-native-modalbox under the hood.

## Usage

Call the setModalScenes method from this component in routing to define all the modal routes for this application. For Arivaa Basic, It is called in js/routing/index.js. This is the standard approach we advise to follow but in case you would like to create modals on the fly with some content you can pass children to Modal or use content property in case ModalTrigger.

Use the Modal or ModalTrigger Components in the required component to call the modal.

_**Using Modal Component**_ : This approach should be used when you want to control the visible state of the modal manually in your code i,e you want a controlled modal.

```jsx
<Modal onHide = {this.onHide.bind(this)} contentProps = {{navigation}} 
modalId = "sample" visible = {visible} />
```

**Using Modal Trigger** : This approach should be used when you would like to use a trigger to open the modal that supports onPress or onClick say a Button or a Link etc. In this approach, you are leaving the control for visibility of the modal to the ModalTrigger.

```jsx
<ModalTrigger modalProps = {{modalId : "sample"}}>
    <Button>Click Me</Button>
</ModalTrigger>
```

## Supported Properties

### Modal

1. onHide : Callback to be called on hide of the modal
2. onShow : Callback to be called on show of the modal
3. hideCloseButton : Boolean to define whether to show or hide the close button of modal
4. modalId : Modal Id of the modal defined while calling setModalScenes.
5. contentProps : Properties to be used in the content component of the modal. Neccesary since we might need some custom properties to be passed from modal triggering component to the content component of the modal.
6. visible : Boolean to define whether to show or hide the modal

### ModalTrigger

1. content : In case, the modal is a temporary modal and is not defined in setModalScenes, you can pass this property. No need to pass modalId here.
2. modalProps : Properties of Modal as defined in the previous section.

**Note : ModalTrigger should have only 1 immediate child and should support onClick or onPress**

