

const Contact = () => {
    return (
        <div id="contact" className="flex px-[10%] items-center justify-between mt-40 mb-40 max-lg:flex-col">
            <h1 className="font-bold text-5xl leading-[1.3] w-80 mb-7  max-sm:text-4xl  max-lg:w-full">
                Sign Up from
                <span className="text-coral_red"> Updates 
                </span> & Newsletter
            </h1>
            <div className="relative w-[35%] max-lg:mt-5 max-lg:w-full">
                <input type="text" placeholder="subscribe@nike.com" className="w-full px-5 py-8 h-10 rounded-full b border border-slate-600 outline-none" />
                <button className="rounded-full bg-coral_red flex gap-3 py-3 text-white px-4 items-center font-montserrat absolute top-2 right-3">
                Sign Up
            </button>
            </div>
        </div>
    )
}

export default Contact