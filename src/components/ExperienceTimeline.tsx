import { Briefcase, Building, IdCard, MapPin } from "lucide-react";
import NathanDigitalExperience from "@/Content/NathanDigitalExperience.md?raw";
import SamsotechExperience from "@/Content/SamsotechExperience.md?raw";
import Markdown from "react-markdown";
import remarkBreaks from 'remark-breaks';

type Props = {};

const ExperienceTimeline = (props: Props) => {
    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
            <Experience
                dates="Aug 2024 - Present"
                headline="Software Developer"
                description={SamsotechExperience}
                organization="Samsotech International"
                location="Dubai, U.A.E"
            />
            <Experience
                dates="Aug 2023 - Jul 2024"
                headline="Backend Developer"
                description={NathanDigitalExperience}
                organization="Nathan Digital"
                location="Dubai, U.A.E"
            />
            <Experience
                dates="Aug 2024 - Present"
                headline="Software Developer"
                description="Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose injected humour and the like."
                organization="GITBITZ Software Private Limited"
                location="Kozhikode, India"
            />
            <Experience
                dates="Aug 2022 - Feb 2023"
                headline="Trainee Engineer"
                description="Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose injected humour and the like."
                organization="Colt Technology Services"
                location="Bangalore, India"
            />
            <Experience
                dates="Sep 2021 - Jun 2022"
                headline="Junior Software Developer"
                description="Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose injected humour and the like."
                organization="GITBITZ Software Private Limited"
                location="Kozhikode, India"
            />
        </div>
    );
};

type ExperienceProps = {
    dates: string;
    headline: string;
    organization: string;
    description: string;
    location: string;
};
const Experience = (experienceProps: ExperienceProps) => {
    return (
        <div className="relative">
            <div className="mb-3 items-center md:flex md:space-x-4">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    <div className="bg-background flex h-10 w-10 items-center justify-center rounded-full shadow md:order-1">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <time className="text-chart-2 text-lg font-medium md:w-28">
                        {experienceProps.dates}
                    </time>
                </div>
                <div className="ml-4 w-full flex-col items-start justify-between md:flex md:flex-row">
                    <div className="flex flex-col gap-2">
                        <div className="text-foreground flex items-center gap-2 text-lg font-bold">
                            <IdCard />
                            {experienceProps.headline}
                        </div>
                        <div className="text-foreground flex items-center gap-2">
                            <Building />
                            {experienceProps.organization}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin />
                        {experienceProps.location}
                    </div>
                </div>
            </div>
            <div className="font-sans ml-14 rounded border border-slate-200 p-4 shadow md:ml-44 prose prose-sm">
                <Markdown remarkPlugins={[remarkBreaks]}>{experienceProps.description}</Markdown>
            </div>
        </div>
    );
};
export default ExperienceTimeline;
