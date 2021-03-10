import EditorHeader from './EditorHeader'
import ThumbnailList from './ThumbnailList'
import CanvasTools from './CanvasTools'
import Canvas from './Canvas'
import ToolBar from './ToolBar'

export default function Editor() {
    return (
        <section className="flex flex-col h-screen">
            <EditorHeader />
            <section className="flex w-full flex-grow">
                <div className="border-r p-2 flex-grow-0	flex-shrink-0 w-1/6">
                    <ThumbnailList />
                </div>
                <div className="flex-grow p-2">
                    <CanvasTools />
                    <Canvas />
                </div>
                <div className="border-l p-2 flex-grow-0	flex-shrink-0 w-1/6">
                    <ToolBar />
                </div>
            </section>
        </section>
    )
}
