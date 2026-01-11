const InputField = ({
  label,
  type="text",
  value,
  onChange,
  name,
  placeHolder,
  required = true
}) => {
  return(
    <div className="flex flex-col gap-1">
      <label className="text-sm text-muted text-white">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        required={required}
        className="px-4 py-2 rounded-xl bg-slate-300 border border-white/10 text-gray-600 outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  )
}

export default InputField;