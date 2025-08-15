import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="mx-auto my-16 flex max-w-3xl flex-col-reverse items-center gap-8 px-8 md:flex-row md:gap-16">
            {/* Text Section */}
            <div className="flex flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                    Hi, I'm Ajvad
                </h1>
                <h2 className="text-foreground text-xl leading-relaxed md:text-3xl">
                    A Software Developer <br />
                    based in U.A.E
                </h2>
            </div>

            {/* Image Section */}
            <div className="flex w-2/5 justify-center md:justify-end">
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQF2eMVBwaC9ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718222515842?e=1758153600&v=beta&t=ljxuqyaJ0ra4GJ53vsNjfkCPFwbEcjQBbfSwFfs1drY"
                    alt="Portrait of Ajvad Laseen"
                    className="border-foreground rounded-full border-4 shadow-lg transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                />

                {/* <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
            </div>
        </section>
    );
};

export default Hero;
