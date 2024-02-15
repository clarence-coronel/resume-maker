import Heading from "./Heading"
import { useState } from "react"

function Input({ label, placeholder, value, name, onChangeHandler }){
    return (
        <div className="flex flex-col items-start justify-center">
            <label className="font-medium" htmlFor="name">{label}</label>
            <input onChange={onChangeHandler} name={name} value={value} className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" id="name" placeholder={placeholder} />
        </div>
    )
}

export default function PersonalDetails({ personalDetailsObj, onChangeHandler }){
    const [isOpen, setIsOpen] = useState(true);

    function toggle(){
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg border-2 border-gray-200 shadow">
            <Heading title="Personal Details" clickHandler={toggle} def={true} />

            <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
                <Input onChangeHandler={onChangeHandler} label="Full Name" name="name" placeholder="Juan Dela Cruz" value={personalDetailsObj.name}/>
                <Input onChangeHandler={onChangeHandler} label="Email" name="email" placeholder="example@gmail.com" value={personalDetailsObj.email}/>
                <Input onChangeHandler={onChangeHandler} label="Phone Number" name="phone" placeholder="09XX XXX XXXX" value={personalDetailsObj.phone}/>
                <Input onChangeHandler={onChangeHandler} label="Address" name="address" placeholder="Municipality, Province" value={personalDetailsObj.address}/>
            </div>
        </div>
    )
}