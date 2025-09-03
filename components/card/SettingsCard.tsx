import { FaChevronRight } from "react-icons/fa6";

type SettingsCardProps = {
    children?: React.ReactNode
    className?: string;
    obj: {
        color?: string;
        icon?: React.ReactNode;
        img?: string;
        text: string;
        subtext?: string;
        href?: string;
    }
}

export default function SettingsCard({ children, className, obj, ...rest}: SettingsCardProps) {
    return (
        <div className={`flex justify-between items-center cursor-pointer ${className ? className : ""}`} {...rest}>
            <div className="flex items-center gap-3.5">
                <figure className={`size-12 grid place-items-center rounded-xl overflow-hidden ${obj.icon ? "*:size-6" : ""} ${obj.color ? obj.color : "bg-[#4E5462]"}`}>
                    {obj.icon ? obj.icon : obj.img ? <img src={obj.img} alt="" className="size-full object-cover" /> : ""}
                </figure>

                <div className="font-medium">
                    <p className="text-lg">
                        {obj.text}
                    </p>
                    {obj.subtext && (
                        <p className="text-sm text-grey-light">
                            {obj.subtext}
                        </p>
                    )}
                </div>
            </div>

            <FaChevronRight className="size-5" />
        </div>
    )
}