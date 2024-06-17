import { PageProps } from "gatsby";
import React, { useRef, useState, MutableRefObject } from "react";
import Header from "../components/Header";
import { IoArrowForwardOutline } from "react-icons/io5";

const HireUsPage: React.FC<PageProps> = () => {
  const formRef: MutableRefObject<HTMLFormElement | null> =
    useRef<HTMLFormElement | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    businessName: "",
    description: "",
    deadline: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    const finalFormData = new FormData(formRef.current);
    finalFormData.append("Services", selectedOptions.join(", "));

    for (const [key, value] of Object.entries(formData)) {
      finalFormData.append(key, value);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbzpZKoCb4Di1Kfws7FEYIsFZVbnu_i0cLwk6va9wpo2r1ivojXXqaAXC2iaQ8XTyg/exec",
      {
        method: "POST",
        body: finalFormData,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        // Reset form fields
        setFormData({
          fullName: "",
          email: "",
          website: "",
          businessName: "",
          description: "",
          deadline: "",
          additionalInfo: "",
        });
        setSelectedOptions([]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full mt-20 max-xl:px-4">
        <div className="flex flex-col items-center max-w-5xl">
          <h1 className="font-serif text-5xl text-center">Project Inquiry</h1>
          <p className="font-regular text-2xl mt-10 text-center">
            Fill out the form below and we will respond within 24 hours to let
            you know if we’re a good fit and to schedule an intro call. ​
          </p>
          <h3 className="text-center font-heavy mt-12 text-2xl text-gray">
            INQUIRY <span className="text-gray/60">FORM</span>
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col w-full mt-20"
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray"
            />
            <div className="flex flex-row gap-6 w-full mt-12">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray w-full"
              />
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website Link"
                className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray w-full"
              />
            </div>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              required
              className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray mt-12"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your business/work"
              required
              className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray mt-12"
            />

            <div className="flex flex-col">
              <p className="text-xl rounded font-regular text-gray mt-12 mb-5">
                What services are you looking for?
              </p>
              <label className="text-base accent-black text-gray mb-3 font-regular items-start flex flex-row">
                <input
                  type="checkbox"
                  value="Branding (Strategy and Design)"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span className="ml-3">Branding (Strategy and Design)</span>
              </label>
              <label className="text-base accent-black text-gray mb-3 font-regular items-start flex flex-row">
                <input
                  type="checkbox"
                  value="Packaging Design"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span className="ml-3">Packaging Design</span>
              </label>
              <label className="text-base accent-black text-gray mb-3 font-regular items-start flex flex-row">
                <input
                  type="checkbox"
                  value="Design and Development"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span className="ml-3">Design and Development</span>
              </label>
              <label className="text-base accent-black text-gray font-regular items-start flex flex-row">
                <input
                  type="checkbox"
                  value="Custom"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span className="ml-3">
                  Custom <span>(Let us know and we will get back to you)</span>
                </span>
              </label>
            </div>
            <input
              type="text"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              placeholder="Do you have any deadlines?"
              onFocus={(e) => (e.target.type = "date")}
              className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray mt-12"
            />
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Anything else you would want us to know (optional)"
              className="border-2 p-4 text-xl rounded font-regular placeholder:text-gray mt-12"
            />
            <button
              type="submit"
              className="link relative group mt-8 px-[0.38rem] py-1 w-28 self-center inline-flex justify-between items-center border-2 hover:z-10 border-black rounded bg-transparent font-regular text-xl text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              <p>Submit</p>
              <IoArrowForwardOutline className="rotate-45 group-hover:rotate-0 transition-all ease-in-out" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default HireUsPage;
