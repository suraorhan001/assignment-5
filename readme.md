
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


Answer(1):
 *getElementById():Selects a single element with the specified id.
 *getElementsByClassName():Selects all qelements that have the 
 same class name
 *querySelector():Selects the first element that matches the given CSS selector.
 *querySelectorAll():Selects all elements that match the given CSS selector.


2. How do you **create and insert a new element into the DOM**?
Answer(2): create and intert a new element into the container div.

html :<div id="container"></div>
js : let newText =  document.createElement('p');
newText.textContent = 'This is a new text.';
container.appendChild(newText);


3. What is **Event Bubbling** and how does it work?
Answer(3):Event bubbling happens when i  click a button, and the event starts on that element, then moves up through its parent elements.

When i click on something:
The event happens on the thing i clicked.
Then it also affects the element around it (its parent).
Then it keeps going up to the top of the page.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer(4):Event Delegation is a technique where one can add a single event listener to the parent element, and let it handle events from its child elements — using event bubbling.And its very useful for better performance,handle dynamic content,cleaner code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer(5):
*preventDefault():Stops the default behavior the browser performs when an event occurs
*stopPropagation():stops the event from bubbling up the DOM tree to parent elements.


---

