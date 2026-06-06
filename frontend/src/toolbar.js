import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="pipeline-toolbar">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='api' label='API' />
            <DraggableNode type='timer' label='Timer' />
            <DraggableNode type='condition' label='Condition' />
            <DraggableNode type='note' label='Note' />
            <DraggableNode type='math' label='Math' />
        </div>
    );
};
