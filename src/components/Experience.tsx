import AddButton from "./AddButton"
import Heading from "./Heading"
import { v4 as uuid } from 'uuid';
import { useState } from "react";

function ExperienceFields({ cancelHandler, isOpen, saveHandler, setIsAddActive }){
    return(
        <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Company Name</label>
                <input id="company" className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="Example Company Inc." />
            </div>

            <div className="flex flex-row flex-wrap gap-3">
                <div className="flex-1 flex flex-col items-start justify-center">
                    <label className="font-medium" htmlFor="">Start Date</label>
                    <input id="startDate" className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="08/2020" />
                </div>

                <div className="flex-1 flex flex-col items-start justify-center">
                    <label className="font-medium" htmlFor="">End Date</label>
                    <input id="endDate" className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="07/2024" />
                </div>
            </div>

            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Address</label>
                <input id="address" className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="Municipality, Province"/>
            </div>

            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Position</label>
                <input id="position" className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="Associate Exampler Engineer" />
            </div>

            <div className="flex flex-col items-start justify-center">
                <label className="font-medium" htmlFor="">Description</label>
                {/* <input className="focus:outline-blue-500 border-none bg-neutral-100 rounded-lg px-3 py-2 w-full h-fit" type="text" placeholder="123 Banga 1st, Baliuag, Bulacan"/> */}
                <textarea id="description" className="focus:outline-blue-500 h-20 border-none resize-none bg-neutral-100 px-3 py-2 rounded-lg w-full" placeholder="I'm responsible for creating examples..."></textarea>
            </div>

            <div className="flex flex-col-reverse flex-nowrap justify-end mt-8 gap-3 sm:flex-row">
                {/* <button className="hover:-translate-y-1 duration-200 flex flex-row flex-nowrap items-center justify-center gap-1 px-4 py-1 border-2 border-gray-200 text-gray-400 rounded-md font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#b0acac" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                    Delete
                </button> */}

                <div className="flex flex-row flex-nowrap gap-3">
                    <button onClick={cancelHandler} className="hover:-translate-y-1 flex-1 duration-200 px-4 py-1 border-2 border-gray-200 text-gray-400 rounded-md font-bold">Cancel</button>
                    <button onClick={() => {saveHandler({
                        id: uuid(),
                        company: document.querySelector("#company").value,
                        startDate: document.querySelector("#startDate").value,
                        endDate: document.querySelector("#endDate").value,
                        address: document.querySelector("#address").value,
                        position: document.querySelector("#position").value,
                        description: document.querySelector("#description").value
                    }); clearExpFields(setIsAddActive)}} 
                    className="hover:-translate-y-1 flex-1 duration-200 px-4 py-1 text-white bg-blue-500 rounded-md font-bold">Save</button>
                </div>
            </div>
        </div>
    )
}

function clearExpFields(setIsAddActive){
    setIsAddActive(false);

    document.querySelector("#company").value = ""
    document.querySelector("#startDate").value = ""
    document.querySelector("#endDate").value = ""
    document.querySelector("#address").value = ""
    document.querySelector("#position").value = ""
    document.querySelector("#description").value = ""
}

export default function Experience({ expList = [], add, remove }){
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
                expList.length != 0 && isOpen && !isAddActive &&
                expList.map(exp => {
                    return(
                        <div key={exp.id} className="flex flex-row justify-between p-2 border-b">
                            <span className="font-semibold">{exp.company}</span>
                            <button className="hover:cursor-pointer duration-200" onClick={() => remove(exp.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
                            </button>
                        </div>
                    )
                })
            }

            {
                isAddActive && <ExperienceFields isOpen={isOpen} setIsAddActive={setIsAddActive} cancelHandler={toggleAddExp} saveHandler={add} />
            }

            { !isAddActive && isOpen &&
            <div className={`${isOpen ? "" : "hidden"} w-full gap-3 flex flex-col`}>
                <AddButton isOpen={isOpen} handler={toggleAddExp} text="Experience" />
            </div>
            }    
        </div>
    )
}