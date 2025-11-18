

const Input =({placeholder,icon})=>{

  return (
    <div className="flex items-center border border-black rounded-full px-3 h-8.5 ">
      <input
      type="text"
      placeholder={placeholder}
      className=" flex-1 outline-none border-none bg-transparent text-sm "
      />
      {icon}
    </div>
  )
}
export default Input

