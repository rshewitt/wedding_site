const ThingsToDo = () => {
    return (
      <div id="ttd_dev" className="max-w-3xl mx-auto text-center">      
        <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2">
          <h4 className="mb-1">Things To Do</h4>
        </div>
  
        <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0 md:text-3xl font-black">
          <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
            Example 1
          </div>
          <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
            [other content]
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0 md:text-3xl font-black">
          <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
            Example 2
          </div>
          <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
            [other content]
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0 md:text-3xl font-black">
          <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
            Example 3
          </div>
          <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
            [other content]
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-4 md:py-16 md:px-0 md:text-3xl font-black">
          <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Example 4
          </div>
          <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
            [other content]
          </div>
        </div>
      </div>
    );
  };
  
  export default ThingsToDo;