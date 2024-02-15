import ResumeTitle from "./ResumeTitle";

function EducationEntry({ educ }){
    return(
        <div className="w-full h-fit flex flex-row py-5">
            <div className="flex flex-col w-1/4 gap-1">
                <div className="w-full">{educ.startDate == "" || educ.endDate == "" ? "" : `${educ.startDate} - ${educ.endDate}`}</div>
                <div className="w-full">{educ.address}</div>
            </div>
            <div className="flex flex-col w-3/4 gap-1">
                <div className="w-full font-bold text-blue-950">{educ.school}</div>
                <div className="w-full">{educ.degree}</div>
            </div>
        </div>
    )
}

export default function ResumeEducation({ educArr }){
    return(
        <div>
            {
                educArr.length != 0 && <ResumeTitle title="Education" />
            }

            <div className="flex flex-col">
                {educArr.map(educ => {
                    return <EducationEntry key={educ.id} educ={educ} />
                })}                
            </div>
        </div>
    )
}