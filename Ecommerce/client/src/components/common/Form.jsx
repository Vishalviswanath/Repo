const CommonForm = ({
  formControls,
  formData,
  setFormData,
  buttonText,
  onSubmit,
}) => {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || '';

    switch (getControlItem.componentType) {
      case 'input':
        element = (
          <input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            autoComplete=''
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case 'select':
        element = (
          <select
            name={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          >
            <option value='' disabled>
              {getControlItem.placeholder}
            </option>
            {getControlItem.options && getControlItem.options.length > 0
              ? getControlItem.options.map((optionItem) => (
                  <option key={optionItem.label} value={optionItem.value}>
                    {optionItem.label}
                  </option>
                ))
              : null}
          </select>
        );

        break;
      case 'textarea':
        element = (
          <textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {formControls.map((controlItem) => (
          <div key={controlItem.name}>
            <label>{controlItem.label}</label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <button type='submit'>{buttonText || 'submit'}</button>
    </form>
  );
};

export default CommonForm;
