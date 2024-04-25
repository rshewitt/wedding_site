import Image from "next/image";
import TextWithLine from "./TextWithLine";
import { StaticImageData } from "next/image";

interface ProfileProps {
    pic?: StaticImageData;
    altVal?: string;
    name?: string;
    role?: string;
    desc?: string;
    idx?: number;
}

const Person = ({ pic, altVal, name, role, desc, idx }: ProfileProps) => {
    return (
        <div className="w-full md:w-1/2 px-4" key={idx}>
            <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
                <Image
                    src={pic!}
                    alt={altVal!}
                    className="w-48 h-48 rounded-full mb-8"
                />
                <h3 className="text-xl-wel font-normalBold mb-4 text-gray-800">
                    {name!}
                </h3>
                <div className="mb-4">
                    <TextWithLine>{role!}</TextWithLine>
                </div>
                <p className="font-normal text-gray-500 leading-6">{desc!}</p>
            </div>
        </div>
    );
};

export default Person;
