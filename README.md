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
forms (input, textarea, select) typically maintain their own state, react components has its state only updated with setState(). We can combine the two and make React the **single source of truth**. An input form element whose value is controlled by React in this way is called a *Controlled Component*.

- Lifting a state up, is creating a local state that will serve as the **source of truth** for multiple components. (example : Calculator's state that provides temperature in Celsius and Fahrenheit : check sharingstate.jsx)

- React Composition :
some components don't know their children ahead of time, we use the keyword children to pass elements directly to the output of those components : (return  {props.children})

- There is no limitation to what you can pass as props in React (objects..)

- Specialization : when a Component is a special case of another component (Dialog->WelcomeDialog).the configuration is done with props.
WelcomeDialog(){
    return (<Dialog title='' message='' prop3=''>)
    }
- Thinking in React : 
    1. Build a Mock 
    2. Draw the Components Hirerarchy
    3. Build a static version (hard coded data) **DONT** use state at all at this stage!
    ***NOTE : In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.***
    4. DATA :
        4.1 List all the pieces of data
        4.2 Figure out which ones are states by asking the 3 questions (cf. reactjs.org/docs/thinking-in-react)
    5. Identify where the state should live : The woner of the state should be a component above all that needs the state in the hierarchy of the components thar render something based on that state (so, list those first)
    6. Add inverse data flow
    also remember, Components should only update their own state
- Hooks : 
1. useState : contains the *current* state and a function to update it, React preserves a state between the renders
    const[count, setCount] = useState(0);
2. useEffect : you're telling React to run the "effect" function after every **render** of elements in the page
    useEffect( () => { `${count}` })
Effect may also (optionally) specify how to "clean up" after them, by returning a function! (cf. reactjs.org/docs/hooks-overview) and that's equivalient to ComponentDidUnmount
