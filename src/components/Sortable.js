import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';
import Table from "./Table";
import useSort from "../hooks/use-sort";

function Sortable(props){
    
    const { config, data } = props;
    const {sortBy, sortOrder, sortedData, setSortColumn} = useSort(data, config); 

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        };

        return {
            ...column,
            header: () => (
                <th onClick={() => setSortColumn(column.label)} className="cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        { column.label}
                    </div>
                </th>
            )
        }
    });

    
    return <Table {...props} data={sortedData} config={updatedConfig}/>;
};

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
       
    }
    if(sortOrder === null){
        return (
            <GoArrowSmallUp />,
            <GoArrowSmallDown />
        );
    }else if (sortOrder === 'asc'){
        return <GoArrowSmallUp />;
    }else if (sortOrder === 'desc'){
        return <GoArrowSmallDown />;
    }
}

export default Sortable;