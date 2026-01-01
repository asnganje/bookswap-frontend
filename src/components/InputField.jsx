const InputField = ({
  label,
  type="text",
  value,
  onChange,
  placeHolder,
  required = true
}) => {
  return(
    <div className="flex flex-col gap-2">
      <label className="text-sm text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        required={required}
        className="px-4 py-3 rounded-xl bg-slate-300 border border-white/10 text-gray-600 outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  )
}

export default InputField;