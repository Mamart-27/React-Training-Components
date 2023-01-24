import React from 'react';
import './table.css';

const Table = (props) => {
    const { data } = props;

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        {Object.values(item).map(value => <td key={value}>{value}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
