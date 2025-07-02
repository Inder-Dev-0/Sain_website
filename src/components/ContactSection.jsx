import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import spring from "../assets/spring.png"
import star from "../assets/star.png"

const ContactSection = () => {
    return (
        <section className="w-full relative bg-[#f9fafe] py-20 px-4">
            <div className="absolute w-[20vw] right-0 -top-12">
                <img src={spring} className="mix-blend-color-burn drop-shadow-[2px_4px_6px_rgb(0,0,0,0.5)]" alt="" />
            </div>
            <div className="absolute w-[40vw] left-0 -bottom-12">
                <img src={star} className="mix-blend-color-burn drop-shadow-[2px_4px_6px_rgb(0,0,0,0.5)]" alt="" />
            </div>

            <div className="relative z-11">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">Let’s Get in Touch</h2>
                </div>

                <form className="max-w-2xl mx-auto flex flex-col gap-6">
                    <InputField label="email" type="email" placeholder="example@email.com" />
                    <InputField label="name" type="text" placeholder="full name" />
                    <TextAreaField label="message" placeholder="write your message...." />

                    <button
                        type="submit"
                        className="bg-[#3c4eff] text-white font-semibold py-3 rounded-md hover:bg-[#2e3dcc] transition"
                    >
                        Get in Touch
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;