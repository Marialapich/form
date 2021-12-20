function FormRadio ({ field, form, label }) {
  const { errors, touched } = form;

  return <div>
      <input type="radio" name={field.name} value={field.name} id={field.name} />
      <label for={field.name}>{label}</label>
      {errors[field.name] && touched[field.name] ? <p>{errors[field.name]}</p> : null}
  </div>
}

export default FormRadio;