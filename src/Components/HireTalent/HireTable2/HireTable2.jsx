import Title from '../../reusables/title/Title'
import './HireTable2.css'

function HireTable2({ title, tableData, description }) {
    return (
        <div className='hire-table2-div'>
        <div className="hire-table2-container">
            <Title title={title}/>
            <p>{description}</p>
            <div className='hire-table2'>
                <table>
                    <thead>
                    <tr>
                        {tableData.headers.map((header, idx) => (
                        <th key={idx}>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.rows.map((row, idx) => (
                        <tr key={idx}>
                            <td>{row.label}</td>
                            {row.values.map((value, vIdx) => (
                                <td key={vIdx}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default HireTable2