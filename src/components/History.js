import React from 'react';

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>
                    {row.name}
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const History = (props) => {
    const { characterData } = props;
    return (
        <table>
            <TableBody
                characterData={characterData}
            />
        </table>
    );
}

export default History;