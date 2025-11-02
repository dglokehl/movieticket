import Link from "next/link"

import SettingsCard from "./SettingsCard"
import LogoutButton from "./LogoutButton";

import { settingsDataProps } from "../data/settingsData";

type SettingsSectionProps = {
    className?: string;
    data: settingsDataProps[];
    heading: string;
}


export default function SettingsSection({ className, data, heading, ...rest}: SettingsSectionProps) {
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
                        ) : obj.text === "Logout" ? (
                            <LogoutButton>
                                <SettingsCard obj={obj} />
                            </LogoutButton>
                        ) : (
                            <SettingsCard obj={obj} />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
}