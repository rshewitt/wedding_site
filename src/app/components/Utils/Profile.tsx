import Image from "next/image";
import TextWithLine from "./TextWithLine";
import { StaticImageData } from "next/image";

interface ProfileProps {
    pic?: StaticImageData;
    altVal?: string;
    name?: string;
    role?: string;
    desc?: string;
    key?: number;
}

interface ProfileMinorProps {
    name?: string;
    role?: string;
    key?: number;
}

export const ProfileMinor = ({ name, role, key }: ProfileMinorProps) => {
    return (
        <div
            key={key}
            className="col-span-1 text-center md:text-center text-xl-wel font-normalBold text-gray-800"
        >
            {name}
            <div className="mb-4">
                <TextWithLine>{role}</TextWithLine>
            </div>
        </div>
    );
};

const Profile = ({ pic, altVal, name, role, desc, key }: ProfileProps) => {
    return (
        <div className="w-full md:w-1/2 px-4" key={key}>
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

export default Profile;
