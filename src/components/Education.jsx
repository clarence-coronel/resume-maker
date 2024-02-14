import AddButton from "./AddButton"
import Heading from "./Heading"
import { useState } from "react";

export default function Education(){
    const [isOpen, setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg border-2 border-gray-200 shadow">
            <Heading title="Education" clickHandler={toggle}/>
            <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
                <AddButton text="Education" />
            </div>
        </div>
    )
}