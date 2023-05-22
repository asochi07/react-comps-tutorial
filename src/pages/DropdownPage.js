import { useState } from "react";
import Dropdown from "../components/Dropdown";


function DropdownPage() {

    const [item, setItem] = useState(null);

    const options = [
        {
            label: 'Red', value: 'red'
        },
        {
            label: 'Green', value: 'green'
        },
        {
            label: 'Blue', value: 'blue'
        }
    ];

    const handleSelect = (newItem) => {
        setItem(newItem);
    }

    return <div>
        <Dropdown options={options} value={item} onChange={handleSelect} />
    </div>
}

export default DropdownPage;