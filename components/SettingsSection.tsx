import Link from "next/link"

import SettingsCard from "@/components/card/SettingsCard"
import { settingsDataProps } from "@/data/settingsData"

type SettingsSectionProps = {
    children?: React.ReactNode
    className?: string;
    data: settingsDataProps[];
    heading: string;
}


export default function SettingsSection({ children, className, data, heading, ...rest}: SettingsSectionProps) {
    return (
        <section className={`${className ? className : ""}`} {...rest}>
            <h2 className="mb-3 heading-1">
                {heading}
            </h2>

            <ul className="flex flex-col gap-5">
                {data.map((obj, i) => (
                    <li key={i}>
                        {obj.href ? (
                            <Link href={obj.href}>
                                <SettingsCard obj={obj} />
                            </Link>
                        ) : (
                            <SettingsCard obj={obj} />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}