# Form

We have designed this component specifically for compatibility with practical problems and issues.This component is based on rc-form and antd-design form elements.

Below are the guidelines, which we believe, are necessary for a form:  
1. We should be able to create a form based on a simple configuration which should only give the type of elements and their properties.It should be able to validate each input on submit instead of validating inputs on focus, or on blur etc. In other words, "When a field should be validated" should be decided at the form level.  
2. Submit Trigger should be customizable.  
3. Each supported input type should support almost all the validations.  
4. We should not create too many components for input types, which is why we have one component for all types.

To achieve this we have come up with few things which enable us to achieve this behaviour

1. There is a form component under which we can support any type of form element even the custom made ones and it will  detect, validate and process the input components. 
2. There is a input component for which using type property we can use different types of input e.g
   1. Simple Text
   2. Numeric
   3. Phone Number
   4. Email
   5. Password
3. All types of validations are supported via the use of rc-form. Check this [link](https://github.com/react-component/form) to know how you can create rules

## Usage

```jsx
                const formElements = [
                            {
                                type: "email",
                                name: "email",
                                inputProps: {
                                    clear: true,
                                    placeholder: "Enter Email",
                                    labelNumber: 1.5,
                                    style: [styles.input],
                                    placeholderTextColor: "#fff",
                                    color: "#fff",
                                    children: (
                                        <Image
                                            resizeMode="contain"
                                            source={envelope}
                                            style={[styles.inputIcon]}
                                        />
                                    )
                                },
                                options: email
                            },
                            {
                                type: "password",
                                name: "password",
                                inputProps: {
                                    clear: true,
                                    placeholder: "Enter Password",
                                    labelNumber: 1.5,
                                    style: [styles.input],
                                    placeholderTextColor: "#fff",
                                    color: "#fff",
                                    children: (
                                        <Image
                                            resizeMode="contain"
                                            source={lock}
                                            style={[styles.inputIcon]}
                                        />
                                    )
                                },
                                after : (
                                    <Link
                                        textStyle={[styles.forgotPassword]}
                                        text="Forgot Password ?"
                                        link="forgotPassword"/>
                                ),
                                options: password
                            }
                        ];




                <Form
                        elements={formElements}
                        style={{
                            Body: styles.list
                        }}
                        onSubmit = {this.onSubmit.bind(this)}
                        submitTrigger={{
                            buttonProps: {
                                style: styles.button
                            },
                            textProps: {
                                style: styles.buttonText
                            },
                            text : "Sign In"
                        }}
                    >

                    </Form>
```

## Supported Properties

### elements :

It should be a array of form elements. Each form element object has the below format :

```javascript
{
            type: "email",
            name: "email",
            inputProps: {
                clear: true,
                placeholder: "Enter Email",
                labelNumber: 1.5,
                style: [styles.input],
                placeholderTextColor: "#fff",
                color: "#fff",
                children: (
                    <Image
                        resizeMode="contain"
                        source={envelope}
                        style={[styles.inputIcon]}
                    />
                )
            },
            options: email
        }
```

#### Format of form element object :

**type** - type of input e.g number, text etc

**name** - name of the input - It is mandatory. This name will be used in values object passed in onSubmit callback.

**inputProps** : Properties supported by input. Since we are using antd design form elements, Any property is supported by default [antd design](https://mobile.ant.design) form elements.

**options** : Options supported by [getFieldDecorator](https://github.com/react-component/form) method of rc-form. Used to set properties for input like initialValue, validation rules etc.

**customElement** : Currently in this version, We don't support all the elements from antd mobile as a part of input component. So for flexibility, You can pass this property when you want to use any unsupported element from antd design library. e.g suppose we want to use TextareaItem as a form element in this form component. We can use it as below :

```text
{
            customElement : (
                        <TextareaItem
                        title="标题"
                        placeholder="auto focus in Alipay client"
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                      />
            ),
            options : textarea // The options to be passed to getFieldDecorator function
        }
```

### submitTrigger

This property is used to define the behaviour of the submit button. By default, Every form renders a submit button as the default trigger for form submission. You can either customize this default button or you can provide your own trigger and customize the entire form submission mechanism. submit accepts a json object.

#### Format of submitTrigger object :

**buttonProps** : Properties of the default antd design button that will be rendered. All [Button](https://mobile.ant.design/components/button/) Component props are supported.

**textProps** : Properties of the text that will be rendered under button.

**text** : Button Text

**getTrigger** : Function which returns the custom trigger where you can customize the form submission via the config object that is passed as a argument to this function. This config object has 3 functions as properties :

* form -&gt; Form Object which is created by rc-form. It supports a lot of helper methods. To check the complete [list](https://github.com/react-component/form).

```text
{
    buttonProps : {

    },
    textProps : {

    },
    getTrigger : ({form)=>{

    },
    text : ""

}
```

### onSubmit :

If default submit button is used, onSubmit is the callback that is called on click of that button. It has 1 arguments passed to it :

* values - contains all the values of the inputs under the FormComponent

### onError :

If default submit button is used, onError is the callback if the form has validation errors. It has 1 arguments passed to it :

* errors - Any validations errors while validating the form

