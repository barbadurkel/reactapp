# In JSX you can't use class attribute in an html file, use classNamr instead
# React doesn't force the use of ES6 syntax
# TODO: is render() and extends Component (in the App.js) deprecated?

###Thinking in React

*Assuming we have a mock from our designe* 
* Break down the UI into React components and sub-components.
* Nase the breaking on the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), that is each one should do one thing only
* Arrange the components into a hierarchy (draw it)
* Build a STATIC version (rendering data but no interactivity), to do that use props and don't use states!
* It's easier to go top-down, build the big components first
* at the end of this step you'll have a **one-way data flow**  
* Now, identifiy the minimal represntation of UI state, to be able to make your UI interactive.
* ask the following questions about the pieces of data you have :
    ..* is it passed from a parent via props? if so, it's not a state
    ..* does it remain unchanged (immutable) over time? if so, it's not a state
    ..* can you compute it based on other state or props in your component? if so, it's not a state
* identify here your state should live
**TODO**