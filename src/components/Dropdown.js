import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";

function Dropdown({ options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const HandleOptionChange = (newOption) => {
        // Close Dropdown
        setIsOpen(false);
        // Select And Store The Option The User Clicked On
        onChange(newOption);
    };

    const renderedOptions = options.map((option) => {

        return <div key={option.value} className="hover:bg-gray-100 rounded cursor-pointer p-1">
            <div onClick={() => HandleOptionChange(option)}>
                {option.label}
            </div>
        </div>
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    {value?.label || "Select..."}
                    <span><GoChevronDown className="text-lg"/></span>
            </Panel>
                {isOpen && (
                    <Panel className="absolute top-full w-full">
                        {renderedOptions}
                    </Panel>
                )}
        </div>
    );
}

export default Dropdown;