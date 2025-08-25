import { Briefcase, Building, IdCard, MapPin } from "lucide-react";
import SamsotechExperience from "@/Content/SamsotechExperience.md?raw";
import NathanDigitalExperience from "@/Content/NathanDigitalExperience.md?raw";
import GitbitzExperience2 from "@/Content/GitbitzExperience2.md?raw";
import ColtExperience from "@/Content/ColtExperience.md?raw";
import GitbitzExperience1 from "@/Content/GitbitzExperience1.md?raw";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

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
                description={GitbitzExperience2}
                organization="GITBITZ Software Private Limited"
                location="Kozhikode, India"
            />
            <Experience
                dates="Aug 2022 - Feb 2023"
                headline="Trainee Engineer"
                description={ColtExperience}
                organization="Colt Technology Services"
                location="Bangalore, India"
            />
            <Experience
                dates="Sep 2021 - Jun 2022"
                headline="Junior Software Developer"
                description={GitbitzExperience1}
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
            <div className="ml-14 md:ml-44">
                <div className="prose prose-sm max-w-none rounded border border-slate-200 p-4 font-sans shadow">
                    <Markdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                            p: ({ children }) => (
                                <p className="mb-3 last:mb-0">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="mb-3 list-disc space-y-1 pl-6">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="mb-3 list-decimal space-y-1 pl-6">
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="leading-relaxed">{children}</li>
                            ),
                            h1: ({ children }) => (
                                <h1 className="mb-2 text-lg font-semibold">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="mb-2 text-base font-semibold">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="mb-2 text-sm font-semibold">
                                    {children}
                                </h3>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-semibold">
                                    {children}
                                </strong>
                            ),
                            br: () => <br className="block" />,
                        }}
                    >
                        {experienceProps.description}
                    </Markdown>
                </div>
            </div>
        </div>
    );
};

export default ExperienceTimeline;
