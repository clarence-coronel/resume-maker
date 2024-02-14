import Heading from "./Heading"
import { useState } from "react"

function Input({ label, placeholder }){
    return (
        <div className="flex flex-col items-start justify-center">
            <label className="font-medium" htmlFor="name">{label}</label>
            <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" id="name" placeholder={placeholder} />
        </div>
    )
}

export default function PersonalDetails(){
    const [isOpen, setIsOpen] = useState(true);

    function toggle(){
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg border-2 border-gray-200 shadow">
            <Heading title="Personal Details" clickHandler={toggle} def={true} />

            <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
                <Input label="Full Name" placeholder="Juan Dela Cruz" />
                <Input label="Email" placeholder="example@gmail.com" />
                <Input label="Phone Number" placeholder="09XX XXX XXXX" />
                <Input label="Address" placeholder="Plaridel, Bulacan" />
            </div>
        </div>
    )
}