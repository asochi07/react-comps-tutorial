import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }){

    const [expandIndex, setExpandIndex] = useState(0);

    const handleClick = (itemIndex) => {
        setExpandIndex((currentExpandIndex) => {
            if(currentExpandIndex === itemIndex){
                return -1;
            }else {
                return itemIndex;
            }
        });
    };
    
    const renderedItems = items.map((item, index) => {
       
        const isExpand = index === expandIndex;
        const icon = isExpand ? <GoChevronDown /> : <GoChevronLeft />;
        return <div key={item.id}>
            <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                {item.label}
                {icon}
            </div>
            {isExpand && <div className='border-b p-5'>{item.content}</div>}
        </div>
    });

    return <div className='border-x border-t rounded'>
        { renderedItems }
    </div>
}

export default Accordion;