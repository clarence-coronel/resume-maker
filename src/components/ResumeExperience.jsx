import ResumeTitle from "./ResumeTitle";

function ExperienceEntry({ dateRange, address, company, role, roleDesc }){
    return(
        <div className="w-full h-fit flex flex-row py-5">
            <div className="flex flex-col w-1/4 gap-1">
                <div className="w-full">08/20 - Present</div>
                <div className="w-full">Plaridel, Bulacan</div>
            </div>
            <div className="flex flex-col w-3/4 gap-1">
                <div className="w-full font-bold text-blue-950">Umbrella Inc.</div>
                <div className="w-full">UX & UI Designer</div>
                <div className="w-full">Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</div>
            </div>
        </div>
    )
}

export default function ResumeExperience(){
    return(
        <div>
            <ResumeTitle title="Experience" />

            <div className="flex flex-col">
                <ExperienceEntry />
                <ExperienceEntry />
            </div>
        </div>
    )
}