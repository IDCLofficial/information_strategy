type TitleProps = {
    label: string;
}

export const Title = ({ label }: TitleProps) => {
    return(
        <h1 className="w-max text-[14px] md:text-2xl text-center font-medium bg-white rounded-[2rem] px-[1rem] py-[2px]">
            {label}
        </h1>
    )
}
