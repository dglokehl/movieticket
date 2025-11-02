import BackButton from "../buttons/BackButton";

type HeaderProps = {
    obj: {
        title?: string;
        button?: React.ReactNode;
    }
}


export default function Header({ obj }: HeaderProps) {
    return (
        <header className="h-header px-default flex justify-between items-center gap-3 fixed top-0 inset-x-0 z-99999 bg-bg">
            <BackButton />

            <h1 className="heading-1 text-center line-clamp-1">
                {obj.title ? obj.title : ""}
            </h1>

            <div className="size-6 *:first:size-5 cursor-pointer">
                {obj.button && obj.button}
            </div>
        </header>
    )
}