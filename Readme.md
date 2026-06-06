# VectorShift Pipeline Builder

A visual pipeline builder for creating AI workflows using drag-and-drop nodes and edges. Built with React, React Flow, and FastAPI.

## Setup

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:3000`

### Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Runs on `http://localhost:8000`

## Architecture

### Node Abstraction

All nodes extend a shared `BaseNode` component (`src/nodes/BaseNode.js`) that handles:
- Consistent layout (header, content area)
- Configurable handles (inputs/outputs)
- Per-type styling via CSS classes

Creating a new node requires only defining its unique fields and handle configuration. Nine node types are included:

| Node | Purpose | Inputs | Outputs |
|------|---------|--------|---------|
| Input | Data entry point | -- | 1 |
| Output | Data exit point | 1 | -- |
| LLM | AI model processing | 2 (system, prompt) | 1 (response) |
| Text | Prompt template with variables | Dynamic (per `{{ var }}`) | 1 |
| API | HTTP request | 1 (body) | 1 (response) |
| Timer | Delay step | 1 (trigger) | 1 |
| Condition | If/else branching | 1 | 2 (true, false) |
| Note | Annotation (no connections) | -- | -- |
| Math | Arithmetic operations | 2 (a, b) | 1 (result) |

### Text Node

- Auto-resizes width and height as the user types
- Parses `{{ variableName }}` patterns and dynamically creates input handles on the left side for each unique variable

### Backend Integration

The **Submit** button sends all nodes and edges to `POST /pipelines/parse`, which returns:

```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```

DAG validation uses Kahn's algorithm (topological sort via in-degree counting) to detect cycles.

## Tech Stack

- **Frontend:** React 18, React Flow, Zustand (state management)
- **Backend:** Python, FastAPI, Pydantic
