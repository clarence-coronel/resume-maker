import ResumeHeader from "./ResumeHeader"
import ResumeEducation from "./ResumeEducation"
import ResumeExperience from "./ResumeExperience"

export default function LivePreview({ personalDetailsObj }){
    return (
        <div id="livePreview" className="h-fit p-2 lg:p-7 overflow-hidden">
            <div class="aspect-[8/11] border-2 border-gray-200shadow">
                <ResumeHeader name={personalDetailsObj.name} email={personalDetailsObj.email} phone={personalDetailsObj.phone} address={personalDetailsObj.address} />
                <div className="p-3 lg:px-20 lg:py-10 flex flex-col gap-y-5">
                    <ResumeEducation />
                    
                    <ResumeExperience />
                </div>
            </div>
        </div>
    )
}