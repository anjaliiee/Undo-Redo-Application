# Undo-Redo Text Editor with Custom Cursor
<img src="https://github.com/user-attachments/assets/c8bb56d2-c75f-40f7-b813-7aad004d74cc" alt="image" width="500" height="500">

## Introduction
This project implements a text editor with undo-redo functionality and a custom animated cursor. The editor allows users to type text, undo and redo their changes, and enjoy a modern, sleek interface with a trailing cursor effect.

## Features
- **Undo-Redo Functionality**: Track text changes and revert or reapply them using undo and redo buttons.
- **Custom Cursor**: A stylish, animated cursor that follows the mouse movement with a trailing effect.
- **Dynamic Explanation Section**: A collapsible section explaining the working of the undo-redo functionality, which opens when the cursor hovers over it.

## How Does It Work?
- **Undo/Redo in Layman's Terms**:
  - **Think of Actions as Steps**: Every change you make in the text area (like typing or deleting) is a step.
  - **Undo Stack**: Imagine a stack of papers. Every step you take (like adding a word) is a paper added to the stack. When you hit "Undo," you remove the top paper (the last step you did) and go back to the previous step.
  - **Redo Stack**: If you "Undo" a step, that removed paper goes onto a new stack: the redo stack. When you hit "Redo," you take the top paper from the redo stack and put it back on the original stack, reapplying that step.

## Getting Started
Follow these instructions to set up the project locally.

### Prerequisites
- A web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Installation
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/anjaliiee/Undo-Redo-Application.git
   cd Undo-Redo-Application
   ```
2.## Open the Project
Open `index.html` in your web browser to see the text editor in action.

## Files and Structure
- `index.html`: Contains the structure of the web page.
- `styles.css`: Contains the styles for the web page, including the custom cursor and collapsible section.
- `script.js`: Contains the JavaScript code for undo-redo functionality and custom cursor.

## Usage
- **Type Text**: Start typing in the text area.
- **Undo Changes**: Click the "Undo" button to revert the last change.
- **Redo Changes**: Click the "Redo" button to reapply the last change.
- **Hover for Explanation**: Hover over the "How Does It Work?" section to reveal detailed explanations.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements
Inspired by various text editor projects and custom cursor designs.

## License
This project is licensed under the MIT License. See the LICENSE file for details.



