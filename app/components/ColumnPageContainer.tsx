

export default function ColumnPageContainer({children, columns}: {children: React.ReactNode, columns:number}) {
    return (
        <div className="flex flex-col items-center justify-around my-12">
            <div className={`relative text-center place-self-center lg:max-w-5xl lg:w-full text-base-content dark:text-neutral-content grid grid-cols-${columns}`}>
            {children}
            </div>
        </div>
    )
}