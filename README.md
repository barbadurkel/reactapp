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

 -  React has an **unidirectional** data flow : any state is always owned by some specific component and any can only affect the components 'below'
 
 - preventDefault() stops the default action of an element from happening (ex. a submit button from submitting a form)

 - Class components : in order for the **this** keyword to work inside a function (ex. handleClick), a bind must be added in the constructor :
 this.handleClick = this.handleClick.bind(this);

 another way around using bind is defining the event handler using the experimental syntax : 
        handleClick = () => { blabla; }

- embedding any JS in JSX by wrapping in culy braces, includin the JS && operator, example :
{unreadMsgs.length > 0 && <div>you have {unreadMsgs.length} msgs</div>}
(will return false if there are no msgs) 
(check conditionalrendering.jsx)

- Keys help React identify which items have changed in an array. (every element must have a key which is unique, but we only specify the key when there is an array of elements, example : using the map function)
numbers.map(number => <li key={number.toString()}></li>)

- Controlled components (example : forms)