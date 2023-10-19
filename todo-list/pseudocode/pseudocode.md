# Pseudocode Initial thoughts

## Requirements

- [] Dynamically render the content with React using components
- [] Display all to-do list items
- [] Three "views" got the user: All, Completed and To-Do (not completed)
- [] Cross out or check off one item as "completed"
- [] See a count of remaining items 
- [] Remove one item (either hard delete ot soft delete/archive)
- [] Check off or cross out all items in one click as a "completed all" function
- [] Ability to press a button and all checked off items become active again

### Basic Concept for requirements:

- displaying the number of items for a specific view (JSX, State)
- Rendering any content using React (Rendering Elements)
- ToDoList, ToDoItem, Input, etc (components)
- Sending the to-do item data from the app down to the to-do item (props)
- Modifying a to-do item from in-progress to completed (State)
- Handling an onClick or onChange (Events)
- Displaying "add a new task" / "no completed tasks" if there are none OR listing the remaining to-do / completed items instead (Conditional Rendering)
- Looping (.map()) over the to-do items from state and displaying them on screen (Rendering Lists)
- Clicking on a to-do item and updating the app level state (Lifting/Hoisting State)
- Looping over the to-do items from state and displaying specific ones on the screen based on the view you are on (Dynamic Rendering, JS Array methods)
- Using radios and checkboxes (no need to submit or have a <form> component, you can just use the individual input types) (Inputs, State)

### Based on Wire Frame

> what do I need to make the wire frame?
    >> Title of the project "Todo List"
    >> text input box for entering tasks
        >>> do I want a dropdown option to open and close the list component?

>> title and input text box will automatically load when opening the page

>> text box to generate on table under the input box (result of text box)
    >>> what do I want with the tasks?
        >>>> check box? (to change state of the task)
        >>>> hover effect to delete the task from the list 

>>> tabs?? at the bottom of the list box to show: 
    >>>> number of items on the list
    >>>> tab for all task items on the list
    >>>> tab for active tasks (not completed)
    >>>> tab for completed (strike through; state changed)
    >>>> button to clear completed tasks (delete)

> how will I use local storage?
    >> automatically store the tasks entered in local storage to be able to keep them on the page no matter if refreshed
    >> do I want to store completed tasks?
        >>> if I do this, will I store tasks even if they are deleted?
            >>>> can I hard delete them from local storage? (why would i want to use this?)

## MoSCoW: 

##### Must Have

> Input box
> Task List dropdown
> Tabs to show different items of state
> display of all task list items
> check off finished tasks (not necessarily check boxes but something to cross off tasks)
> count of to dos
> ability to remove item from list
> ability to target all list items to change state back to to-do 

##### Should Have

> 

##### Could Have

> Check boxes
> hover function to delete tasks from list

##### Won't Have

> categories depending on the task

