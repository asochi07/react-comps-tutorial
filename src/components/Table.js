import { Fragment } from "react";

function Table({ data, config, keyFn}){

    const renderedHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.label}>{ column.header()}</Fragment>
        }
        return <th key={column.label}>{ column.label}</th>
    });

    const renderedRows = data.map((rowData) => {
        const renderCells = config.map((column) => {
            return  (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });
        
        return ( 
            <tr className="border-2" key={keyFn(rowData)}>
                { renderCells }
            </tr>
        );
    });

    


    return <table>
        <thead>
            <tr>
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
}

export default Table;