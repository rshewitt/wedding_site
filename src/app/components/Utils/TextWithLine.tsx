import type { ReactNode } from "react";

interface TextWithLineProps {
    children?: ReactNode;
}

const TextWithLine = ({ children }: TextWithLineProps) => {
    return (
        <div className="flex items-center justify-center">
            <div className="border-t border-gray-400 w-8" />
            <div className="text-center text-md-twl font-normalItalic text-gray-600 mx-3">
                {children}
            </div>
            <div className="border-t border-gray-400 w-8" />
        </div>
    );
};

export default TextWithLine;
