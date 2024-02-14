export default function InputContainer({ children }){
    return (
        <div className="flex flex-col gap-3 h-fit min-h-screen p-2 lg:p-7">
            {children}
        </div>
    )
}