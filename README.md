# reactapp


 - React components are composed of elements,
 - each element might have one or more props and a type
 - props might be attributes (like className) or children (like inner HTML content)


 - To render an element into a root DOM node, pass both to ReactDOM.render()
 ReactDOM.render(element, document.getElementById('root'))

 - React elements are **immutable**, the only way to update the UI is to create a new element and pass it to ReactDOM.render()

 - Simplest way to define a component : (it is valid because it accepts a single props parameter)

            function Component(props){
                return <h1>{props.name}</h1>
            }
- state is similar to props, but it is private and fully controlled by the component

- State & Lifecycle (check examplereact.jsx) :
 1. when <Clock/> is passed to ReactDOM.render(), React calls Clock constructor wich initializes the state with the current time
 2. React then calls the Clock component's render then updates the DOM with its output
 3. After the DOM is updated, React calls componentDidMount which calls tick() every second
 4. tick() updatex the local state of the component, React notices that and updates the DOM, simple as that.
 5. if the Clock component is removed, React calls the componentWillUnmount() lifecycle method