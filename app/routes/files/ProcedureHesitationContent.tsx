import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { InteractiveEye } from "../../components/InteractiveEye";

export default function ProcedureHesitationContent(): ReactNode {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="w-full h-full flex flex-col font-['Chivo_Mono'] select-none bg-[#0B1021] text-white overflow-hidden relative">
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start text-center">
                <div className="max-w-3xl space-y-8 my-auto">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#BACBFF] leading-tight">
                        Between procedure and hesitation
                    </h1>

                    <div className="space-y-6 text-base md:text-lg leading-relaxed font-sans text-left text-[#BACBFF] ">
                        <p>
                            Taking the step to report is only the beginning. Once a complaint is filed, many survivors confront a deeper challenge: the hesitation to continue pursuing the complaint. This does not come from weakness but reflects the emotional and practical weight of entering a process that can feel overwhelming.
                        </p>
                        <p>
                            In her work at the UGH, Ofreneo often sees how filing a formal complaint carries significant personal implications that survivors carefully consider before deciding how to proceed. She emphasizes that readiness cannot be imposed by institutions and should instead come from the survivors themselves. Building on this, Ofreneo notes that the pace of reporting is closely tied to a survivor’s sense of safety and trust in the process itself. While some may feel prepared to act immediately, others need time to rebuild confidence in the system and in the support structures around them. Respecting this pace, she notes, is part of the University’s responsibility to care.
                        </p>
                        <p>
                            As survivors weigh their options, many first turn to{" "}
                            <a href="https://www.facebook.com/share/p/1CURsnxbhM/" target="_blank" rel="noopener noreferrer" className="underline">
                                peer-led support
                            </a>
                            . The{" "} 
                            <a href="https://www.facebook.com/SangguCASMV" target="_blank" rel="noopener noreferrer" className="underline">
                                Commission on Anti-Sexual Misconduct and Violence
                            </a>
                            {" "}(CASMV), a student-led body under the Sanggunian, provides peer-level assistance through its {" "}
                            <a href="https://www.facebook.com/share/p/1CURsnxbhM/" target="_blank" rel="noopener noreferrer" className="underline">
                                trained
                            </a>
                            {" "} first responders. These volunteers listen to disclosures, offer initial guidance, and help connect survivors to the appropriate University offices, making the first step toward reporting feel more accessible.
                        </p>
                            <div className="w-full max-w-[961px] bg-[#F5FF64] text-[#000000] p-[20px] md:pt-[36px] md:pb-[36px] md:px-[63px] border-r-[4px] border-b-[4px] border-[#000000] shadow-[inset_4px_4px_0px_#FFFFFF] font-sans">
                                <p className="!text-black">                            
                                    Within the conversation sessions held with responders, Escarez explains that the principle of{" "} 
                                    <a href="https://learn.childhood.org.au/empowered-consent/#:~:text=Affirmative%20consent%20moves%20us%20away%20from%20the,be%20enthusiastic%2C%20clear%2C%20and%20an%20ongoing%20yes" target="_blank" rel="noopener noreferrer" className="underline !text-[#000000]">
                                        empowered consent
                                    </a> 
                                    {" "}ensures survivors decide for themselves whether to file a formal complaint, pause the process, or pursue other forms of support. For her, keeping these decisions with the survivor helps prevent additional harm and allows them to engage with the process in ways that feel safe.
                                </p>
                            </div>
                        <p>
                            However, even with these mechanisms, societal attitudes continue to shape how survivors experience the process. Broader societal attitudes, such as{" "}
                            <a href="https://www.sace.ca/learn/victim-blaming/" target="_blank" rel="noopener noreferrer" className="underline">
                                victim blaming
                            </a>
                            {" "} and {""} 
                            <a href="https://www.cameleon-association.org/contexte-aux-philippines/?lang=en" target="_blank" rel="noopener noreferrer" className="underline">
                                rape culture
                            </a>
                            {" "} remain strong deterrents, discouraging many from speaking out despite available support.
                        </p>
                    </div>

                    <div className="relative w-full h-[350px] flex items-center justify-center my-12">
                        <div className="relative flex flex-col items-center">
                            <div 
                                className="w-[153.49px] h-[153.49px] relative z-1 rounded-full shadow-[0px_6px_0px_rgba(22,27,63,0.3)]"
                                style={{ background: "linear-gradient(180deg, #C2CCFF 0%, #8593DC 100%)" }}
                            />
                            <div 
                                className="w-[180.54px] h-[250.19px] rounded-full -mt-10 shadow-[0px_6px_0px_rgba(22,27,63,0.3)]"
                                style={{ background: "linear-gradient(180deg, #C2CCFF 0%, #8593DC 100%)" }}
                            />
                        </div>

                        <InteractiveEye direction="left" width="272.52px" height="124.61px" className="left-[2%] top-[5%]" style={{ transform: "rotate(-3.32deg)" }} />
                        <InteractiveEye direction="left" width="188.71px" height="86.74px" className="left-[5%] bottom-[5%]" style={{ transform: "rotate(-16.33deg)" }} />
                        <InteractiveEye direction="right" width="188.71px" height="86.74px" className="right-[5%] top-[5%]" style={{ transform: "rotate(-16.33deg)" }} />
                        <InteractiveEye direction="right" width="272.52px" height="124.61px" className="right-[2%] bottom-[5%]" style={{ transform: "rotate(-3.32deg)" }} />
                    </div>

                    <div className="space-y-6 text-base md:text-lg leading-relaxed font-sans text-left text-[#BACBFF]">
                        <div className="space-y-6 text-base md:text-lg leading-relaxed font-sans text-left text-[#BACBFF]">
                            <p>Escarez explains that a survivor’s immediate environment plays a significant role in this hesitation. She explains that conversations around sexual misconduct remain taboo in many Filipino households, particularly among older generations, making disclosure difficult even within one’s own family. In some cases, she acknowledges that these experiences are minimized, with responsibility shifting onto the victim, which further discourages individuals from coming forward.</p>
                            <p>Within this context, Ofreneo frequently encounters doubts that shape survivors’ decisions. She asks,</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[961px] bg-[#BACBFF] text-[#161B3F] p-[20px] md:py-[20px] md:px-[32px] border-t-[4px] border-l-[4px] border-[#1E3293]/50 border-r-[4px] border-b-[4px] border-[#1E3293] shadow-[4px_4px_0px_rgba(0,0,0,0.25)] font-sans">
                        <div className="flex flex-col border border-[#1E3293]/30 bg-[#F4F7FF] shadow-md">
                            <div 
                                onMouseEnter={() => setHoveredIndex(0)}
                                className={`p-4 font-semibold text-lg flex items-center justify-between cursor-pointer ${
                                    (hoveredIndex === 0 || hoveredIndex === null) ? "bg-[#254EDF] text-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)]" : "bg-[#F4F7FF] text-[#161B3F]"
                                }`}
                            >
                                <span>“Will there be support?”</span>
                            </div>
                            <div 
                                onMouseEnter={() => setHoveredIndex(1)}
                                className={`p-4 border-t border-[#1E3293]/20 font-semibold text-lg flex items-center justify-between cursor-pointer ${
                                    hoveredIndex === 1 ? "bg-[#254EDF] text-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)]" : "bg-[#F4F7FF] text-[#161B3F]"
                                }`}
                            >
                                <span>“Will they be believed?”</span>
                            </div>
                            <div 
                                onMouseEnter={() => setHoveredIndex(2)}
                                className={`p-4 border-t border-[#1E3293]/20 font-semibold text-lg flex items-center justify-between cursor-pointer ${
                                    hoveredIndex === 2 ? "bg-[#254EDF] text-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.3)]" : "bg-[#F4F7FF] text-[#161B3F]"
                                }`}
                            >
                                <span>“Will they be further shamed or stigmatized?”</span>
                            </div>
                        </div>
                        <div className="space-y-6 text-base md:text-lg leading-relaxed font-sans text-left mt-6">
                            <p className="!text-[#161B3F]">These questions, she adds, weigh heavily on those considering whether to come forward.</p>
                        </div>
                    </div>

                    <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#BACBFF] font-sans text-left">
                        <p> Despite laws like the{" "} 
                            <a href="https://www.ombudsman.gov.ph/GAD/Laws%20and%20Mandates/IRR-of-RA-11313-Safe-Spaces-Act.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                                Safe Spaces Act of 2019
                            </a>
                            , reports from the Philippine Commission on Women{" "}   
                            <a href="https://www.gmanetwork.com/news/topstories/nation/929640/pcw-violence-against-women/story/" target="_blank" rel="noopener noreferrer" className="underline">
                                show
                            </a>
                            {" "}that stigma and disbelief remain among the main reasons survivors choose not to report. Legal protections may exist, but the{" "}
                            <a href="https://www.thelancet.com/journals/lanwpc/article/PIIS2666-6065(22)00086-4/fulltext" target="_blank" rel="noopener noreferrer" className="underline">
                                social climate
                            </a>
                            {" "}still dictates who feels safe enough to use them. </p>

                        <p>Within institutional settings, this tension is also reflected in how accountability is framed by the University. Approaches that prioritize rehabilitation are intended to address harmful behavior, but when they are perceived as operating without clear consequences, survivors may question whether justice is truly being served.</p>

                        <p>For Selena, hesitation was shaped by these concerns about accountability. She recalled her father asking what would happen to the student who had harassed her. “They told [my father] that the Ateneo isn’t the kind of institution that likes to punish its students,” she says, referring to the administrators handling her case.</p>
                    </div>
                    
                    <div className="w-full mt-8 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center text-left bg-[linear-gradient(90deg,#6D91FE_0%,rgba(15,26,79,0.1)_100%)]">
                        <div className="w-[240px] h-[240px] md:w-[314px] md:h-[314px] bg-[#BACBFF] shrink-0 border border-[#6D91FE]/30 overflow-hidden relative flex items-center justify-center">
                            <svg width="100%" height="100%" viewBox="0 0 314 314" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="313.049" height="313.049" fill="#BACBFF"/>
                                <path d="M118.568 140.738C108.044 130.213 102.781 117.561 102.781 102.782C102.781 88.0027 108.044 75.3507 118.568 64.8261C129.093 54.3014 141.745 49.0391 156.524 49.0391C171.304 49.0391 183.956 54.3014 194.48 64.8261C205.005 75.3507 210.267 88.0027 210.267 102.782C210.267 117.561 205.005 130.213 194.48 140.738C183.956 151.263 171.304 156.525 156.524 156.525C141.745 156.525 129.093 151.263 118.568 140.738ZM49.0383 264.011V226.391C49.0383 218.777 51 211.782 54.9232 205.404C58.8464 199.027 64.0505 194.154 70.5355 190.786C84.4191 183.844 98.5266 178.64 112.858 175.174C127.19 171.707 141.745 169.97 156.524 169.961C171.304 169.952 185.859 171.689 200.19 175.174C214.522 178.658 228.629 183.862 242.513 190.786C249.007 194.145 254.216 199.018 258.139 205.404C262.062 211.791 264.019 218.786 264.01 226.391H264.011V264.011H49.0383Z" fill="url(#paint0_linear_355_2008)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_355_2008" x1="156.524" y1="49.0391" x2="156.524" y2="264.011" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0827C0"/>
                                        <stop offset="1" stopColor="#4968FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex flex-col text-left space-y-4 flex-1">
                            <h2 className="text-xl md:text-2xl font-bold tracking-[0.15em] text-white font-['Chivo_Mono'] uppercase">
                                SELENA
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-white font-sans">
                                According to her, administrators explained that the University believes in giving second chances and providing therapy to reform behavior. Her father, she adds, was uneasy at the thought that the person who harmed her might remain on campus “just hoping to change.”
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#BACBFF] font-sans text-left">
                        <p>In response, the University has begun strengthening its existing systems for care and accountability. Through the UGH, faculty and staff {" "}
                            <a href="https://www.ateneo.edu/news/2024/05/23/ugdo-bulletin-january-april-2024#:~:text=New%20Formats%20in%20Gender%20Sensitivity%20Training%20and%20Onboarding&text=The%20University%20Gender%20and%20Development%20Office%20released%20UGDO%20memo%20no,take%20this%20module%20via%20INTACT)" target="_blank" rel="noopener noreferrer" className="underline">
                                undergo
                            </a>
                            {" "}regular gender-sensitivity training, while procedures for accompaniment continue to be reviewed and refined based on student needs.</p>

                        <p>Alongside these efforts, Ofreneo shares that the administration has initiated a review of the Code and Rules on Sexual Misconduct to ensure that current policies remain relevant to the community’s needs.</p>

                        <p>Still, rather than relying on policy alone, Ofreneo emphasizes that creating a safe Ateneo requires shared responsibility. She highlights that every member of the community plays a role in challenging harmful behavior, supporting survivors, and maintaining boundaries that protect others.</p>

                        <p>With this, the University’s commitment to safe spaces must therefore be reflected not only in written protocols but also in daily practice. Mutual respect, active awareness, and consistent care form the groundwork of an environment where survivors can step forward without fear.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}