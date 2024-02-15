export default function AddButton({ text, handler }){
    return (
        <button onClick={handler} className="hover:-translate-y-1 duration-200 h-12 justify-center items-center flex gap-2 font-medium w-40 rounded-full px-2 py-1 border-4 border-gray-500 border-opacity-15 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
            {text}
        </button>
    )
}