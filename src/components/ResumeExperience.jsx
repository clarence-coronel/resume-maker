import ResumeTitle from "./ResumeTitle";

function ExperienceEntry({ exp }){
    return(
        <div className="w-full h-fit flex flex-row py-5">
            <div className="flex flex-col w-1/4 gap-1">
                <div className="w-full">{exp.startDate == "" || exp.endDate == "" ? "" : `${exp.startDate} - ${exp.endDate}`}</div>
                <div className="w-full">{exp.address}</div>
            </div>
            <div className="flex flex-col w-3/4 gap-1">
                <div className="w-full font-bold text-blue-950">{exp.company}</div>
                <div className="w-full">{exp.position}</div>
                <div className="w-full">{exp.description}</div>
            </div>
        </div>
    )
}

export default function ResumeExperience({ expArr }){
    return(
        <div>
            {
                expArr.length != 0 && <ResumeTitle title="Experience" />
            }            

            <div className="flex flex-col">
                {expArr.map(exp => {
                    return <ExperienceEntry key={exp.id} exp={exp} />
                })} 
            </div>
        </div>
    )
}