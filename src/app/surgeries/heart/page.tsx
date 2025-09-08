export default function HeartSurgery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Heart Surgery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced cardiac surgical procedures performed by experienced heart surgeons using cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Coronary Bypass
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced coronary artery bypass grafting (CABG) procedures for blocked arteries.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Traditional CABG</li>
              <li>• Minimally invasive CABG</li>
              <li>• Robotic-assisted surgery</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Valve Surgery
            </h3>
            <p className="text-gray-600 mb-4">
              Heart valve repair and replacement procedures for various valve conditions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Aortic valve replacement</li>
              <li>• Mitral valve repair</li>
              <li>• Transcatheter procedures</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Heart Transplant
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive heart transplant program with advanced pre and post-operative care.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Donor evaluation</li>
              <li>• Transplant surgery</li>
              <li>• Post-transplant care</li>
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
