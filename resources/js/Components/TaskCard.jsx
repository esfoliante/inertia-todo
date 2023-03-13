export default function TaskCard({ title = "Title", children }) {
    return(
        <div className="w-full min-h-32 bg-white shadow-xl rounded-md">
            <div className="text-center p-3 bg-purple-500 rounded-t-md font-bold text-white text-xl">
                <p>{ title }</p>
            </div>
            <div className="p-5 space-y-5 w-full">
                { children }
            </div>
        </div>
    );
}
