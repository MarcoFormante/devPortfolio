import { Mail } from "lucide-react";
import LinkButton from "../../components/LinkButton";

export default function Contacts() {
  return (
    <section id="contatti" className="mt-20 bg-surface-2 flex flex-col gap-4 py-15">
        <h2 className="text-cyan font-black text-xs text-center">PRONTO A COLLABORARE</h2>
        <h3 className="text-text text-[54px] font-extrabold text-center">Hai bisogno di un junior motivato?</h3>
        <span className="text-lg text-muted text-center font-bold">Contattami!</span>
        <div className="flex justify-center items-center mt-5 gap-3.5">
            <LinkButton ComponentType={"a"} to="mailto:formante.marco@gmai.com" styles="hover:-skew-2 px-5 py-[15px] transition-all duration-300 text-bg text-[15px] bg-text flex items-center w-max rounded-[18px] gap-2.5 font-black" text={<span className="order-2">formante.marco@gmail.com</span> }>
                <Mail className="order-1" /> 
            </LinkButton>

            <LinkButton ComponentType={"a"} to="https://www.linkedin.com/in/marco-formante/" target="_blank" styles="px-6 self-center transition-all duration-300 py-[15px] text-text text-[15px] bg-[#0077B7] border border-text/13 flex items-center w-max rounded-[18px] gap-2.5 font-black hover:skew-2" text={<span className="order-2">Linkedin</span> }>
                <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 382 382" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path className="fill-text" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path> </g>
                </svg>
            </LinkButton>
        </div>

    </section>
  )
}
