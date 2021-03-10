import test from '@/utils/test'
test()

export default function App(): React.ReactElement {
    return (
        <div className="App">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12" src="/img/logo.png" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}
