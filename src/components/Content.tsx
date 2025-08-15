import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type Props = {};

const Content = (props: Props) => {
    return (
        <div className="mx-auto flex max-w-3xl">
            <Tabs defaultValue="ExperienceTimeline" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="ExperienceTimeline">
                        Experience
                    </TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="more">More</TabsTrigger>
                </TabsList>

                <div className="mx-8 my-16">
                    <TabsContent value="ExperienceTimeline">
                        <ExperienceTimeline />
                    </TabsContent>
                    <TabsContent value="skills">No Skills</TabsContent>
                    <TabsContent value="projects">Projects</TabsContent>
                    <TabsContent value="more">More</TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default Content;
