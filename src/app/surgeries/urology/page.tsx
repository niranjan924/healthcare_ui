export default function UrologySurgery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Urology Surgery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert urological care with advanced surgical techniques for kidney, bladder, prostate, and urinary tract conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Kidney Surgery
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced procedures for kidney stones, tumors, and other kidney-related conditions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Nephrectomy</li>
              <li>• Kidney stone removal</li>
              <li>• Kidney transplant</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Prostate Surgery
            </h3>
            <p className="text-gray-600 mb-4">
              Minimally invasive procedures for prostate conditions including cancer and BPH.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Robotic prostatectomy</li>
              <li>• TURP</li>
              <li>• Laser prostate surgery</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Bladder Surgery
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive bladder procedures for various urological conditions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Cystectomy</li>
              <li>• Bladder reconstruction</li>
              <li>• Bladder stone removal</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-opacity">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
