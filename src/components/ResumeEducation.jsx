import ResumeTitle from "./ResumeTitle";

function EducationEntry({ dateRange, address, school, degree }){
    return(
        <div className="w-full h-fit flex flex-row py-5">
            <div className="flex flex-col w-1/4 gap-1">
                <div className="w-full">08/20 - Present</div>
                <div className="w-full">Plaridel, Bulacan</div>
            </div>
            <div className="flex flex-col w-3/4 gap-1">
                <div className="w-full font-bold text-blue-950">Bulacan State University</div>
                <div className="w-full">Bachelor in Economics</div>
            </div>
        </div>
    )
}

export default function ResumeEducation(){
    return(
        <div>
            <ResumeTitle title="Education" />

            <div className="flex flex-col">
                <EducationEntry />
                <EducationEntry />
            </div>
        </div>
    )
}