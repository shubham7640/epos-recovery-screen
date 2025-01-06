const PopUp = ({title,details,buttonList,togglePopup}) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
          {/* update w-1/2 to fix the width */}
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <p className="mb-4">{details}</p>
            {buttonList.map(btn=>
                <button
                onClick={btn.buttonFunction}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-blue-600 mr-1"
              >
                {btn.text}
              </button>
              
            )
            // <span>  </span>
            }
            <button
              onClick={togglePopup}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
              Close
            </button>
            
          </div>
        </div>
    );
}
export default PopUp;