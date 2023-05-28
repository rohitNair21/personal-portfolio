import React from "react";

const Resume = () => {
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <button
      className="font-roboto bg-orange-500 dark:bg-slate-900 text-white px-4 py-2 rounded-md ml-5 mr-10 font-bold cursor-pointer"
      onClick={handleDownload}
    >
      Resume
    </button>
  );
};

export default Resume;
