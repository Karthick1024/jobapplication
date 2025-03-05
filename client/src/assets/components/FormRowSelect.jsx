const FormRowSelect = ({ name, labelText, list, defaultValue = '', onChange }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <select name={name} id={name} className='form-select' defaultValue={defaultValue} onChange={onChange}>
                {Object.values(list).map((itemvalue) => {
                    return <option key={itemvalue} value={itemvalue}>
                        {itemvalue}
                    </option>
                })}
            </select>
        </div>
    )
}

export default FormRowSelect
