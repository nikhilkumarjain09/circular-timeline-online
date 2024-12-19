import { useState } from "react";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import { TinySlider } from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import "../css/slider.css"
const Locations = ({ timelineIndex }) => {
    const handleClickMap = (locationName) => {
        const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(locationName)}`;
        window.open(googleMapsUrl, '_blank'); // Open in a new tab
      };
    const importAll = (r) => r.keys().map(r);
    const [imageIndex, setImageIndex] = useState(0);
    const imagewisedata = [
        [
            {
                imagepath: "/images/usa1.png",
                country:"USA",
                name: "Battles of Lexington and Concord",
                description: "The first battles of the American War of Independence, which began on April 19, 1775. The shot heard round the world marked the start of the war.",
            },
            {
                imagepath: "/images/usa2.png",
                country:"USA",
                name: "Boston Tea Party",
                description: "On December 16, 1773, American patriots disguised as Mohawk Indians threw 342 chests of tea into Boston Harbor.",
            },
            {
                imagepath: "/images/usa3.png",
                country:"USA",
                name: "Continental Congress",
                description: "In 1774, the Continental Congress met to discuss independence from Britain. Thomas Jefferson was chosen to write the Declaration of Independence.",
            },
            {
                imagepath: "/images/usa4.png",
                country:"USA",
                name: "Battle of Bunker Hill",
                description: "The first major battle of the American Revolution, where the British won but lost over 40% of their men.",
            },
        ], [
            {
                imagepath: "/images/india1.png",
                country:"INDIA",
                name: "Gandhi arrives in India",
                description: "Gandhi returned to India on 9 January 1915, and initially entered the political fray not with calls for a nation-state, but in support of the unified commerce-oriented territory that the Congress Party had been asking for. Gandhi believed that the industrial development and educational development that the Europeans had brought were long required to alleviate many of India's chronic problems.",
            }, {
                imagepath: "/images/india2.png",
                country:"INDIA",
                name: "Rawlatt Acts passed",
                description: "The acts allowed extrajudicial imprisonment of suspected Indian independence activists. Indians felt profoundly betrayed after their support of England during World War I. In response, Gandhi launched his initial satyagrahastruggle of nonviolent civil disobedience.",
            }, {
                imagepath: "/images/india3.png",
                country:"INDIA",
                name: "Jallianwala Bagh Massacre",
                description: "\British troops fired on hundreds of unarmed civilians in Amritsar, Punjab, intensifying Indian calls for independence. The subsequent Government of India Act of 1919 aimed to increase Indian participation in government but fell short of appeasing Indian demands.",
            }, {
                imagepath: "/images/india4.png",
                country:"INDIA",
                name: "Noncooperation movement",
                description: "\Initiated by Gandhi, this movement of civil disobedience challenged British authority but was called off in 1922 after a violent incident at Chauri Chaura. Many leaders, including Gandhi and Jawaharlal Nehru, were arrested during and after the movement.",
            },
        ],
        [
            {
                imagepath: "/images/french1.png",
                country:"FRANCE",
                name: "The new regime",
                description: "The National Constituent Assembly completed the abolition of feudalism, suppressed the old “orders,” established civil equality among men (at least in metropolitan France, since slavery was retained in the colonies), and made more than half the adult male population eligible to vote, although only a small minority met the requirement for becoming a deputy.",
            }, {
                imagepath: "/images/french2.png",
                country:"FRANCE",
                name: "Events of 1789",
                description: "\The Estates-General met at Versailles on May 5, 1789. They were immediately divided over a fundamental issue: should they vote by head, giving the advantage to the Third Estate, or by estate, in which case the two privileged orders of the realm might outvote the third? On June 17 the bitter struggle over this legal issue finally drove the deputies of the Third Estate to declare themselves the National Assembly; they threatened to proceed, if necessary, without the other two orders.",
            }, {
                imagepath: "/images/french3.png",
                country:"FRANCE",
                name: "Aristocratic revolt, 1787–89",
                description: "The Revolution took shape in France when the controller general of finances, Charles-Alexandre de Calonne, arranged the summoning of an assembly of “notables” (prelates, great noblemen, and a few representatives of the bourgeoisie) in February 1787 to propose reforms designed to eliminate the budget deficit by increasing the taxation of the privileged classes.",
            }, {
                imagepath: "/images/french4.png",
                country:"FRANCE",
                name: "Reign of Terror",
                description: "Reign of Terror, period of the French Revolution from September 5, 1793, to July 27, 1794 (9 Thermidor, year II). With civil war spreading from the Vendée and hostile armies surrounding France on all sides, the Revolutionary government decided to make “Terror” the order of the day (September 5 decree) and to take harsh measures against those suspected of being enemies of the Revolution (nobles, priests, and hoarders).",
            },
        ], [
            {
                imagepath: "/images/china1.png",
                country:"CHINA",
                name: "Tea Culture in China",
                description: "Students will watch a video about Chinese tea and tea wares to learn about their impact on art and traditions. They will also think about how tea influences their community.",
            }, {
                imagepath: "/images/china2.png",
                country:"CHINA",
                name: "Portrait of the Qianlong Emperor",
                description: "Students will analyze a portrait of Emperor Qianlong. They will look closely at the elements of the painting to see how Buddhism, the Mandate of Heaven, and foreign interactions contribute meaning to art.",
            }, {
                imagepath: "/images/china3.png",
                country:"CHINA",
                name: "Diving Deeper into Buddhism – Guanyin",
                description: "Students who are already familiar with Siddhartha Gautama, or Shakyamuni, the Historical Buddha, will deepen their understanding of Buddhist beliefs and artwork. They will analyze and interpret works of art that reveal how people live around the world and what they value. They will identify how works of art reflect times, places, cultures, and beliefs.",
            }, {
                imagepath: "/images/china4.png",
                country:"CHINA",
                name: "Designing with Numbers",
                description: "Students will look closely at a Qing dynasty court robe known as a chaofu. They will learn about the beliefs in Chinese numerology and its relationship to language. After counting the symbols, they will learn why specific numbers of special images appear on the robe. Several related math problems are included.",
            },
        ]
        , [
            {
                imagepath: "/images/germany1.png",
                country:"GERMANY",
                name: "Duckboard track",
                description: "Soldiers of an Australian 4th Division field artillery brigade walk on a duckboard track laid across a muddy, shattered battlefield in Chateau Wood, near Hooge, Belgium, on October 29, 1917. This was during the Battle of Passchendaele, fought by British forces and their allies against Germany for control of territory near Ypres, Belgium.",
            }, {
                imagepath: "/images/germany2.png",
                country:"GERMANY",
                name: "Bosnian Serb",
                description: "A Bosnian Serb nationalist (possibly Gavrilo Princip, more likely bystander Ferdinand Behr), is captured by police and taken to the police station in Sarajevo, on June 28, 1914, following the assassination of Archduke Franz Ferdinand, heir to the Austrian-Hungarian throne, and his wife.",
            }, {
                imagepath: "/images/germany3.png",
                country:"GERMANY",
                name: "Assassination",
                description: "Shortly after the assassination, Austria-Hungary issued a list of demands to Serbia, demanding they halt all anti-Austro-Hungarian activity, dissolve certain political groups, remove certain political officers, and arrest those within its borders who participated in the assassination, among other things -- with 48 hours to comply. Serbia, with the backing of their ally Russia, politely refused to fully comply, and mobilized their army. Soon after, Austria-Hungary, backed by their ally Germany, declared war on Serbia on July 28 1914. A network of treaties and alliances then kicked in, and within a month's time, Germany, Austria-Hungary, Russia, France, Britain, and Japan had all mobilized their armies and declared war. In this photo, taken in August of 1914, Prussian guard infantry in new field gray uniforms leave Berlin, Germany, heading for the front lines. Girls and women along the way greet and hand flowers to them.",
            }, {
                imagepath: "/images/germany4.png",
                country:"GERMANY",
                name: "Great War",
                description: "The conflict, called the Great War by those involved, was the first large-scale example of modern warfare - technologies still use in battle today were introduced in large scale forms then, some (like chemical attacks) were outlawed and later viewed as war crimes. The newly-invented aeroplane took its place as an observation platform, a bomber, and an anti-personnel weapon, even as an anti-aircraft defense, shooting down enemy aircraft. Here, French soldiers gather around a priest as he blesses an aircraft on the Western Front, in 1915.",
            },
        ]
        , [
            {
                imagepath: "/images/japan1.png",
                country:"JAPAN",
                name: "Diplomacy",
                description: "War between the Empire of Japan and the United States was seen as a possibility since the 1920s. Japan had been wary of American territorial and military expansion in the Pacific and Asia since the late 1890s, followed by the annexation of islands, such as Hawaii and the Philippines, which they felt were close to or within their sphere of influence.",
            }, {
                imagepath: "/images/japan2.png",
                country:"JAPAN",
                name: "First wave composition",
                description: "The first attack wave of 183 airplanes, led by Commander Mitsuo Fuchida, was launched north of Oahu.[102] Six airplanes failed to launch due to technical difficulties.",
            }, {
                imagepath: "/images/japan3.png",
                country:"JAPAN",
                name: "Second wave composition",
                description: "The second planned wave consisted of 171 planes: 54 B5Ns, 81 D3As, and 36 A6Ms, commanded by Lieutenant-Commander Shigekazu Shimazaki.[103] Four planes failed to launch because of technical difficulties.",
            }, {
                imagepath: "/images/japan4.png",
                country:"JAPAN",
                name: "Coverage in the United States",
                description: "The initial announcement of the attack on Pearl Harbor was made by the White House Press Secretary, Stephen Early, at 2:22 p.m. Eastern time (8:52 a.m. Hawaiian time): The Japanese have attacked Pearl Harbor from the air and all naval and military activities on the island of Oahu, principal American base in the Hawaiian islands. As information developed, Early made a number of additional announcements to approximately 150 White House reporters over the course of the afternoon.",
            },
        ]
    ];
    const imagesall = [
        "/images/usa1.png",
        "/images/usa2.png",
    ]
    const locationtimeline = [
        {
            imagespath: [
                "/images/usa1.png",
                "/images/usa2.png",
                "/images/usa3.png",
                "/images/usa4.png",
            ]
        },
        {
            name: "Independence from Britain",
            description: "The Indian Independence Movement was a series of historic events in South Asia with the ultimate aim of ending British colonial rule. It lasted until 1947, when the Indian Independence Act 1947 was passed.",
            imagespath: [
                "/images/india1.png",
                "/images/india2.png",
                "/images/india3.png",
                "/images/india4.png",
            ]
        },
        {
            name: "Independence from Britain",
            description: "The Indian Independence Movement was a series of historic events in South Asia with the ultimate aim of ending British colonial rule. It lasted until 1947, when the Indian Independence Act 1947 was passed.",
            imagespath: [
                "/images/india1.png",
                "/images/india2.png",
                "/images/india3.png",
                "/images/india4.png",
            ]
        },
        {
            name: "Independence from Britain",
            description: "The Indian Independence Movement was a series of historic events in South Asia with the ultimate aim of ending British colonial rule. It lasted until 1947, when the Indian Independence Act 1947 was passed.",
            imagespath: [
                "/images/india1.png",
                "/images/india2.png",
                "/images/india3.png",
                "/images/india4.png",
            ]
        },
        {
            name: "Independence from Britain",
            description: "The Indian Independence Movement was a series of historic events in South Asia with the ultimate aim of ending British colonial rule. It lasted until 1947, when the Indian Independence Act 1947 was passed.",
            imagespath: [
                "/images/india1.png",
                "/images/india2.png",
                "/images/india3.png",
                "/images/india4.png",
            ]
        }

    ];
    const nextImage = () => {
        if (imageIndex < 4) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0); // loop back to first image
        }
    };

    const prevImage = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(3); // loop to last image
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagewisedata[timelineIndex].length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagewisedata[timelineIndex].length - 1 : prevIndex - 1
    );
  };
    return (
        <div className="bg-black text-white p-4 md:p-10">
            {/* Wrapper */}
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-xl md:text-3xl font-bold mb-6 font-urbanist">LOCATIONS</h2>

                {/* Content */}
                <div className="relative rounded-md">
                    {/* Image Section */}
                    <div className="relative m-h-[100%] max-w-[50%] overlay-hidden">
                        <div className="relative w-full h-64 md:h-96 rounded-md">
                            <div className="flex w-full h-full transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${imageIndex * 100}%)`,
                                }}
                            >
                                {imagewisedata[timelineIndex].map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.imagepath}
                                        alt={`Location ${index}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`} />
                                ))}
                            </div>
                            {/* {imagewisedata[timelineIndex].map((item,index)=>{
                                    return(
                                        <img
                                        src={item.imagepath}
                                        alt="Location"
                                        className="each-slide-effect w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 rounded-md"
                                        style={{ opacity: 1, border: "10px" }}
                                        ></img>
                                    );
                                   
                                })} */}
                            {/* {imagewisedata[timelineIndex][imageIndex] ?
                                <img
                                    src={imagewisedata[timelineIndex][imageIndex].imagepath}
                                    alt="Location"
                                    className="each-slide-effect w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 rounded-md"
                                    style={{ opacity: 1, border: "10px" }}
                                /> : <p></p>
                            } */}
                        </div>
                        {/* Navigation Buttons */}
                        <div className="font-urbanist absolute top-[40%] left-[97%] transform -translate-y-1/2 flex gap-4">
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                        <div className="font-urbanist absolute top-[20%] left-[97%] transform -translate-y-1/2 flex gap-4">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md"
                            >
                                <FaArrowLeft />
                            </button>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div style={{backgroundColor: 'rgb(77, 115, 182)'}} className="font-urbanist ml-[40%] mt-[-5%] md:mt-[-1%] p-6 md:p-8 rounded-2xl">
                        {imagewisedata[timelineIndex][currentIndex] ? <h3 className="font-urbanist text-lg md:text-2xl font-bold mb-4 rounded-md">{imagewisedata[timelineIndex][currentIndex].name}</h3> : <h3></h3>}
                        {imagewisedata[timelineIndex][currentIndex] ? <p className="font-urbanist text-sm md:text-base leading-relaxed rounded-md">
                            {imagewisedata[timelineIndex][currentIndex].description}
                        </p> : <p></p>}
                    </div>

                    {/* View Map Button */}
                    <div className="font-urbanist absolute bottom-2 right-6">
                        <button 
                        onClick={()=>handleClickMap(imagewisedata[timelineIndex][currentIndex].country)}
                        className="font-urbanist bg-gray-800 border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white transition">
                            View Map
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
