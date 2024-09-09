# Todo-App
## To-Do List Application Documentation

This repository contains the code for a simple To-Do List web application. The application allows users to add tasks, set due dates, mark tasks as complete, and reset the list.

**File Structure:**

- **index.html:** The main HTML file for the application.
- **styles.css:** The CSS file responsible for styling the application.
- **script.js:** The JavaScript file containing the application's logic.

**index.html:**

* **DOCTYPE declaration:** Defines the document type as HTML5.
* **HTML tag:** The root element of the HTML document.
* **head tag:** Contains meta information about the HTML document.
    * **meta charset:** Sets the character encoding to UTF-8 for proper display of all characters.
    * **meta viewport:** Configures the viewport for optimal display on different devices.
    * **title:** Sets the title of the HTML document, which appears in the browser tab.
    * **link rel="stylesheet" href="styles.css":** Links the stylesheet to the HTML document for styling.
    * **link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet":** Includes Google Fonts "Poppins" in three weights for improved typography.
* **body tag:** Contains the visible content of the HTML document.
    * **div class="container":** A container element to hold the main content of the application.
        * **div class="header":** The header section containing the application title and the date input.
            * **h1:** The heading "To-Do List".
            * **input type="date" id="dueDateInput" placeholder="Due Date":** An input field to enter the due date for a task.
        * **input type="text" id="taskInput" placeholder="Add a new task...":** An input field to enter the task description.
        * **button id="btn">Add Task</button:** A button to add a new task to the list.
        * **button id="resetBtn">Reset Tasks</button:** A button to clear all tasks from the list.
        * **p id="taskCount">Tasks: 0 | Completed: 0</p:** A paragraph element to display the count of tasks and completed tasks.
        * **ul id="taskList":** An unordered list element to display the tasks.
    * **script src="script.js":** Includes the JavaScript file to provide functionality to the application.

**styles.css:**

* **General styles:** Defines basic styling for the application like font family, background color, margins, and padding.
* **Container styles:** Styles the container element to center content horizontally and vertically on the page.
* **Header styles:** Styles the header section, including the heading and the date input.
* **Input styles:** Styles the input fields for task description and due date.
* **Button styles:** Styles the "Add Task" and "Reset Tasks" buttons.
* **Task list styles:** Styles the unordered list for tasks, including individual list items (li) and their content.
* **Task styles:** Styles the task items within the list, including text color, checkbox, and due date display.

**script.js:**

* **Event listeners:** Sets up event listeners for the "Add Task" and "Reset Tasks" buttons, and for the input fields.
* **Task adding functionality:** When the "Add Task" button is clicked, it:
    * Retrieves the task description and due date from the input fields.
    * Creates a new list item (li) element and appends it to the task list (ul).
    * Sets the text content of the list item to the task description.
    * Adds a checkbox to the list item to mark the task as complete.
    * Adds the due date to the list item.
    * Updates the task count display.
* **Task completion functionality:** When a checkbox is checked or unchecked, it:
    * Updates the task count display.
* **Reset functionality:** When the "Reset Tasks" button is clicked, it:
    * Removes all list items from the task list.
    * Resets the task count display.
* **Date validation:** Ensures that the due date is a valid date format.

**How to Run the Application:**

1. Save the `index.html`, `styles.css`, and `script.js` files in the same directory.
2. Open `index.html` in a web browser.

**Features:**

* Add new tasks with descriptions and due dates.
* Mark tasks as completed using checkboxes.
* Reset the task list.
* Display the number of tasks and completed tasks.
* Basic styling and user interface.

**Possible Enhancements:**

* Add functionality to edit tasks.
* Implement local storage to persist tasks between sessions.
* Add sorting options for tasks (e.g., by due date, priority).
* Improve styling and user interface design.
* Implement drag-and-drop functionality for task reordering.

This documentation provides a basic overview of the To-Do List application. You can explore the code further to understand the implementation details and add your own customizations.
