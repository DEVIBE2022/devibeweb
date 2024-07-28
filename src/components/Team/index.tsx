import React from "react";
import { Link } from "gatsby";
import { FiLinkedin, FiDribbble, FiTwitter } from "react-icons/fi";
import person1 from "../../images/p1.webp";
import person2 from "../../images/p2.webp";
import person3 from "../../images/p3.webp";
import person4 from "../../images/p4.png";

interface ContainerProps {
  image: string;
  name: string;
  title: string;
  description: string;
  linkedIn: string;
  twitter: string;
  dribbble: string;
}

const Container: React.FC<ContainerProps> = ({
  image,
  name,
  title,
  description,
  linkedIn,
  twitter,
  dribbble,
}) => {
  return (
    <div className="w-full h-full aspect-[2/3] p-0 m-0 flex flex-col group transition-all delay-150">
      <div className="h-2/3 w-full overflow-hidden group-hover:rounded-t-3xl">
        <img
          src={image}
          alt="teammate image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start bg-white p-4">
        <h4 className="text-black text-xl font-heavy mb-2">{name}</h4>
        <p className="text-black text-lg font-regular mb-2">{title}</p>
        <p className="text-black text-base font-regular mb-4">{description}</p>
        <div className="flex gap-4">
          <Link
            to={linkedIn}
            className="p-4 cursor-pointer rounded-full bg-[#F2F4F7] border-none "
          >
            <FiLinkedin size={20} />
          </Link>
          <Link
            to={dribbble}
            className="p-4 cursor-pointer rounded-full bg-[#F2F4F7] border-none"
          >
            <FiDribbble size={20} />
          </Link>
          <Link
            to={twitter}
            className="p-4 cursor-pointer rounded-full bg-[#F2F4F7] border-none"
          >
            <FiTwitter size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section className="bg-light-yellow lg:py-40 py-20 px-6" id="team">
      <div className="mx-auto max-w-7xl flex-grow w-full">
        <h2 className="font-heavy text-gray lg:mb-10 mb-6">TEAM</h2>
        <h1 className="font-serif text-3xl lg:text-6xl text-black lg:w-2/5 w-full mb-10">
          We are a team of 4 who will scale your product
        </h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          <Container
            image={person1}
            linkedIn="https://www.linkedin.com/in/debidattasuryaprakash/"
            twitter="https://twitter.com/DebidattaS10"
            dribbble="https://dribbble.com/"
            name="Debidatta Suryaprakash"
            title="Co-Founder"
            description="Creating impact through product."
          />
          <Container
            image={person4}
            linkedIn="https://www.linkedin.com/in/pritipadmamishra/"
            twitter="https://twitter.com/PritipadmaMish1"
            dribbble="https://dribbble.com/"
            name="Pritipadma Mishra"
            title="Co-Founder"
            description="Considering all possible solutions."
          />
          <Container
            image={person2}
            linkedIn="https://www.linkedin.com/in/muktiray123/"
            twitter="https://twitter.com/RayMukti1"
            dribbble="https://dribbble.com/"
            name="Mukti Ray"
            title="Design Lead"
            description="I make products awesome."
          />{" "}
          <Container
            image={person3}
            linkedIn="https://www.linkedin.com/in/aditya-prasad-mohanty/"
            twitter="https://twitter.com/adityaprasad150"
            dribbble="https://dribbble.com/Aditya-150"
            name="Aditya Prasad Mohanty"
            title="Product Developer"
            description="Building Solutions."
          />
        </div>
      </div>
    </section>
  );
}
