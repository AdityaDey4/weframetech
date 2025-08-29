const Slidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full py-6 bg-[#11455D] text-gray-300 font-inter">
      {/* Logo */}
      <div className="px-6">
        <img src={"logo.png"} className="w-32" alt="logo" />

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 pt-6">
          {[
            "Home",
            "Stages & Checklist",
            "Upload Docs",
            "Preferred Vendors",
            "Tech Stack",
            "Targets",
            "Zee Sales Targets",
            "MAI Settings",
            "Pending Questions",
          ].map((item) => (
            <span
              key={item}
              className="cursor-pointer px-3 py-2 rounded-lg 
                         hover:bg-[#608191] hover:text-white"
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-6">
        <span className="cursor-pointer px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/20 hover:text-red-300 ">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Slidebar;
