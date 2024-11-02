class Action {
  execute() {}
  undo() {}
}

class TextChangeAction extends Action {
  constructor(document, oldValue, newValue) {
    super();
    this.document = document;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }

  execute() {
    this.document.value = this.newValue;
  }

  undo() {
    this.document.value = this.oldValue;
  }
}

class DocumentManager {
  constructor() {
    this.document = document.getElementById("text-area");
    this.undoStack = [];
    this.redoStack = [];
    this.lastValue = this.document.value;
  }

  trackChange() {
    const currentValue = this.document.value;
    if (this.lastValue !== currentValue) {
      let action = new TextChangeAction(
        this.document,
        this.lastValue,
        currentValue
      );
      this.addAction(action);
      this.lastValue = currentValue;
    }
  }

  addAction(action) {
    action.execute();
    this.undoStack.push(action);
    this.redoStack = [];
  }

  undo() {
    if (this.undoStack.length === 0) {
      alert("No actions to undo");
      return;
    }
    let action = this.undoStack.pop();
    action.undo();
    this.redoStack.push(action);
    this.lastValue = this.document.value;
  }

  redo() {
    if (this.redoStack.length === 0) {
      alert("No actions to redo");
      return;
    }
    let action = this.redoStack.pop();
    action.execute();
    this.undoStack.push(action);
    this.lastValue = this.document.value;
  }
}

const docManager = new DocumentManager();

function trackChange() {
  docManager.trackChange();
}

function undo() {
  docManager.undo();
}

function redo() {
  docManager.redo();
}

/* Custom cursor logic */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

const cursorTrail = document.createElement("div");
cursorTrail.classList.add("cursor-trail");
document.body.appendChild(cursorTrail);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  cursorTrail.style.left = `${e.clientX}px`;
  cursorTrail.style.top = `${e.clientY}px`;

  cursorTrail.style.opacity = 1;
  setTimeout(() => {
    cursorTrail.style.opacity = 0;
  }, 200);
});
