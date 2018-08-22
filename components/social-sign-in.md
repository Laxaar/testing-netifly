# Social Sign In

This component is supports sign-in via different types of social providers such as Facebook and Google. At this point, only Facebook and Google are supported.

## Usage

```jsx
<SocialSignIn
                    clientId = {Environment.FACEBOOK.appId}
                    scopes = {
                        Environment.FACEBOOK.scope
                    }
                    type = "facebook"
                    triggerElement = {
                        <Button text="Connect With Facebook" style={[styles.button, styles.facebookBtn]}
                                textStyle={[styles.facebookText]}/>
                    }
                    onSuccess = {(result)=>{this.handleSocialSignIn("facebook",result)}}
                    onError = {(error)=>{this.handleSocialSignInError("facebook",error )}}
                />
```

## Supported Properties

**clientId** - client Id for the social provider

**scopes** - scope of the access required

**type** - type of social provider \(Only Facebook and Google are supported as of now\)

**triggerElement** - Trigger Element to trigger the authentication. It should support onPress or onClick property which will be executed as a callback.

**onSuccess** - on successful authentication

**onError** - on error in authentication

