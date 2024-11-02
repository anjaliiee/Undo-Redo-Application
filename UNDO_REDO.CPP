#include <iostream>
#include <stack>
#include <vector>

class Action {
public:
    virtual void execute() = 0;
    virtual void undo() = 0;
    virtual ~Action() {}
};

class AddTextAction : public Action {
    std::string& document;
    std::string text;
public:
    AddTextAction(std::string& doc, const std::string& txt) : document(doc), text(txt) {}
    
    void execute() override {
        document += text;
    }
    
    void undo() override {
        document.erase(document.size() - text.size(), text.size());
    }
};

class Document {
    std::string content;
    std::stack<Action*> undoStack;
    std::stack<Action*> redoStack;
    
public:
    void addAction(Action* action) {
        action->execute();
        undoStack.push(action);
        while (!redoStack.empty()) {
            redoStack.pop();
        }
    }
    
    void undo() {
        if (undoStack.empty()) {
            std::cout << "No actions to undo\n";
            return;
        }
        Action* action = undoStack.top();
        undoStack.pop();
        action->undo();
        redoStack.push(action);
    }
    
    void redo() {
        if (redoStack.empty()) {
            std::cout << "No actions to redo\n";
            return;
        }
        Action* action = redoStack.top();
        redoStack.pop();
        action->execute();
        undoStack.push(action);
    }
    
    void show() const {
        std::cout << "Document content: " << content << "\n";
    }

    std::string& getContent() {
        return content;
    }
};

int main() {
    Document doc;
    
    // Add text actions
    doc.addAction(new AddTextAction(doc.getContent(), "Hello"));
    doc.show();
    
    doc.addAction(new AddTextAction(doc.getContent(), " World"));
    doc.show();
    
    // Undo actions
    doc.undo();
    doc.show();
    
    doc.undo();
    doc.show();
    
    // Redo actions
    doc.redo();
    doc.show();
    
    doc.redo();
    doc.show();
    
    return 0;
}
