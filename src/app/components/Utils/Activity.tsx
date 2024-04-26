interface ActivityProps {
    title?: string;
    url?: string;
    desc?: string;
    key?: number;
}

const Activity = ({ title, url, desc, key }: ActivityProps) => {
    return (
        <div key={key} className="w-full text-center px-4">
            <div className="flex flex-col items-center sm:px-8 lg:p-20 text-center">
                <div className="col-span-1 text-gray-400 text-left text-xl-wel font-normalBold pb-4">
                    <a href={url} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                </div>
                <p className="text-gray-500 font-normal leading-6">{desc}</p>
            </div>
        </div>
    );
};

export default Activity;
