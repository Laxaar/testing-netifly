# Redux

Redux is implemented in this library via React-Redux. The architecture is built in a way that centres around configuration, along with a boiler plate code on top of React-Redux. This will enable you to concentrate on creating actions, reducers, enhancers and middlewares, while we take care of the configuration.

The redux folder at js/redux contains all the code related to this architecture.

redux -

1. actions - Contains the configuration for actions, creating custom actions, mock for actions
2. config - Contains the configuration for redux 
   1. initial-state.js - Initial state for redux
   2. middlewares - middlewares for redux
   3. enhancers - Enhancers for redux
   4. api.js - The backend API Configuration
   5. index.js - Export all the configuration
3. reducers - contains all the reducer functions
   1. index.js - configures all the reducers
4. third-party - Contains the third party redux plugins e.g react-redux-localize is a third party redux plugin which is being used for localization
5. index.js - Configures all the redux in the application.

## Actions Configuration

Normally, in any type of application, we believe that actions are either ajax calls or just simple functions which return the action name and payload. Thus, instead of creating an action function every time, we use the configuration file which describes the type of action, configuring it as _json_ object. This leaves the creation of action to the architecture.

Under actions folder, index.js handles the reading of configuration files, as well as the creation of actions from the configuration file.

Below is the _json_ schema for creating an action object-

```text
{
   name - Action Name
   type - Type of Action - ajax or empty for normal action ->
   config - {
       url => For Ajax
       method => For Ajax
       headers => For Ajax
       promise => For normal action -> if we want data to be resolved as dummy promise
       getData => General -> If we want to customize the data -> Input data is passed as argument
       getParams => For Ajax -> If we want to get params out of input data
  }
 }
```

There could be cases where in you want to create your own actions instead of using this configuration so you can put them in custom folder and simply export the function via index.js under custom folder.

