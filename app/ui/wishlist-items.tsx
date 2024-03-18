import { useState } from "react";

const services = [
    {
        title: "Branding and Identity Design",
        description: "Crafting unique visual identities that represent your brands values and resonate with your target audience.",
        tag: "branding",
    }, {
        title: "Print Design",
        description: "Creating compelling designs for print materials such as brochures, business cards, posters, and more.",
        tag: "print",
    }, {
        title: "Social Media Graphics",
        description: "Crafting eye-catching graphics optimized for social media platforms to boost your online presence.",
        tag: "social",
    }, {
        title: "Decentralized Application",
        description: "Crafting user-friendly and visually appealing interfaces for blockchain platforms, wallets, and decentralized applications.",
        tag: "dapp",
    }, {
        title: "Web3 Website Design",
        description: "Designing immersive websites that seamlessly integrate blockchain technology, providing interactive and engaging experiences.",
        tag: "website",
    }, {
        title: "Pitch Deck Design",
        description: "Elevate your business narrative, captivate investors, and engage users with compelling visuals that leave a lasting impact.",
        tag: "pitchdeck",
    }, {
        title: "Brand Integration into Metaverse",
        description: "Crafting user-friendly and visually appealing interfaces for blockchain platforms, wallets, and decentralized applications.",
        tag: "metaverse",
    }, {
        title: "Consultation and Ideation",
        description: "Collaborating with you to brainstorm, conceptualize, and refine design ideas tailored to your specific project.",
        tag: "consulting",
    },
];


export default function FormInputs() {
    const [checkedValues, setCheckedValues] = useState<string[]>([]);

    const handleOnChange = (e: any) => {
        const value = e.target.value;
        console.log(value);
        if(checkedValues.includes(value)){
            const updatedValues = checkedValues.filter(v => v != value);
            setCheckedValues(updatedValues);
        } else {
            setCheckedValues([
                ...checkedValues,
                value
            ]);
        }
      };


    return (
        <>
            {services.map((service) => {

                return (
                    <label className="group flex gap-3 items-start hover:cursor-pointer" 
                    htmlFor={service.tag} key={service.tag}>
                        <input className="appearance-none w-8 max-w-4 md:w-14 h-4 max-h-4 bg-transparentbg bg-cover checked:bg-gradientimg checked:borber-4 checked:border-label border border-transparentbg group-hover:border-placeholder rounded-sm" 
                        type="checkbox" 
                        id={service.tag} 
                        name="design-needs" 
                        value={service.tag}
                        checked={checkedValues.includes(service.tag)}
                        onChange={handleOnChange}
                         />
                            <div className="flex flex-col gap-1 opacity-90 group-hover:opacity-100">
                                <h5 className="">{service.title}</h5>
                                <p className="text-xs md:text-sm font-medium text-caption">{service.description}</p>
                            </div>
                    </label>
                );
            })}
        </>
    );
}