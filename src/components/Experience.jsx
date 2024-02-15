import AddButton from "./AddButton"
import Heading from "./Heading"
import { useState } from "react";

function ExperienceFields({ cancelHandler, isOpen }){
    return(
        <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Company Name</label>
                <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="Umbrella Inc." />
            </div>

            <div className="flex flex-row flex-wrap gap-3">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <label className="font-medium" htmlFor="">Start Date</label>
                    <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="08/2020" />
                </div>

                <div className="flex-1 flex flex-col items-start justify-center">
                    <label className="font-medium" htmlFor="">End Date</label>
                    <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="07/2024" />
                </div>
            </div>

            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Location</label>
                <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="123 Banga 1st, Baliuag, Bulacan"/>
            </div>

            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Position</label>
                <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="Jr. Front-End Dev" />
            </div>

            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Description</label>
                {/* <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="123 Banga 1st, Baliuag, Bulacan"/> */}
                <textarea className="focus:outline-blue-500 h-20 border-none resize-none bg-neutral-100 px-3 py-2 rounded-lg w-full" placeholder="I'm responsible for translating wireframes into dynamic web interfaces using HTML, CSS, and JavaScript."></textarea>
            </div>

            <div className="flex flex-col-reverse flex-nowrap justify-between mt-8 gap-3 sm:flex-row">
                <button className="hover:-translate-y-1 duration-200 flex flex-row flex-nowrap items-center justify-center gap-1 px-4 py-1 border-2 border-gray-200 text-gray-400 rounded-md font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#b0acac" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                    Delete
                </button>

                <div className="flex flex-row flex-nowrap gap-3">
                    <button onClick={cancelHandler} className="hover:-translate-y-1 flex-1 duration-200 px-4 py-1 border-2 border-gray-200 text-gray-400 rounded-md font-bold">Cancel</button>
                    <button className="hover:-translate-y-1 flex-1 duration-200 px-4 py-1 text-white bg-blue-500 rounded-md font-bold">Save</button>
                </div>
            </div>
        </div>
        
    )
}


export default function Experience(){
    const [isOpen, setIsOpen] = useState(false);
    const [isAddActive, setIsAddActive] = useState(false)

    function toggleView(){
        setIsOpen(!isOpen)
    }

    function toggleAddExp(){
        setIsAddActive(!isAddActive)
    }


    return (
        <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg border-2 border-gray-200 shadow">
            <Heading title="Experience" clickHandler={toggleView}/>

            {
                isAddActive && <ExperienceFields isOpen={isOpen}  cancelHandler={toggleAddExp} />
            }

            { !isAddActive && isOpen &&
            <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
                <AddButton isOpen={isOpen} handler={toggleAddExp} text="Experience" />
            </div>
            }    
        </div>
    )
}