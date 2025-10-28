import { motion, type Variants } from "framer-motion";
import type { JSX } from "react";
import {
    SiReact,
    SiNodedotjs,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiDotnet,
    SiJavascript,
    SiMongodb,
} from "react-icons/si";

type Skill = {
    name: string;
    icon: JSX.Element;
};

const skills: Skill[] = [
    { name: "React", icon: <SiReact className="text-5xl text-sky-500" /> },
    {
        name: "Node.js",
        icon: <SiNodedotjs className="text-5xl text-green-600" />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-5xl text-blue-600" />,
    },
    {
        name: "Next.js",
        icon: (
            <SiNextdotjs className="text-5xl text-gray-900 dark:text-white" />
        ),
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
    },
    {
        name: ".NET Core",
        icon: <SiDotnet className="text-5xl text-purple-700" />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className="text-5xl text-yellow-500" />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-5xl text-green-700" />,
    },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
            duration: 0.25,
        },
    },
};

const Skills = () => {
    return (
        <motion.div
            className="flex flex-col gap-10 p-6"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Row 1 - 4 skills */}
            <div className="grid grid-cols-4 justify-items-center gap-4">
                {skills.slice(0, 4).map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        {skill.icon}
                        <span className="text-sm font-medium">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Row 2 - 3 skills (centered) */}
            <div className="mx-auto grid grid-cols-3 justify-items-center gap-16">
                {skills.slice(4, 7).map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        {skill.icon}
                        <span className="text-sm font-medium">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-4 justify-items-center gap-4">
                {skills.slice(7, 11).map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        {skill.icon}
                        <span className="text-sm font-medium">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
