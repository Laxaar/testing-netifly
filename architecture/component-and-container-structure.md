# Component and Container Structure

Normally, developers use a single file to define the component styles, logic etc. We believe in a different approach where the styles, logic and testing should be separate. Going forward with this approach, we use a different set of guidelines and structures, which are highlighted below. Following this approach is not mandatory in our application, but we are encouraging it based on our beliefs and research.

Each component has 4 files.

1. main.js
   1. Should contain all the logic of the component
2. view.js
   1. Should only contain the view for the application
3. test.js
   1. Should contain the tests for the component
4. index.js
   1. Should export the component.

