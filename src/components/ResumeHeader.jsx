export default function ResumeHeader({ name, email, phone, location}){
    return (
        <div className="w-full bg-blue-950 min-h-52 h-fit px-10 py-5 flex justify-center items-center flex-col gap-y-5" >
            <h2 className="text-white text-5xl font-bold text-center"> {name} </h2>
            <div className="text-white w-full flex flex-row flex-wrap items-center justify-center gap-5">
                <span className="text-inherit flex flex-row items-center gap-x-1 text-sm"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
                    {email} 
                </span>
                <span className="text-inherit flex flex-row items-center gap-x-1 text-sm"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                    {phone} 
                </span>
                <span className="text-inherit flex flex-row items-center gap-x-1 text-sm"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                    {location} 
                </span>
            </div>
        </div>
    )
}