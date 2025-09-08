export default function OrthopedicSurgery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Orthopedic Surgery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive orthopedic care for bones, joints, muscles, and ligaments with advanced surgical techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Joint Replacement
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced joint replacement surgeries for hip, knee, and shoulder joints.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Hip replacement</li>
              <li>• Knee replacement</li>
              <li>• Shoulder replacement</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sports Medicine
            </h3>
            <p className="text-gray-600 mb-4">
              Specialized surgical treatment for sports-related injuries and conditions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• ACL reconstruction</li>
              <li>• Meniscus repair</li>
              <li>• Rotator cuff surgery</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Spine Surgery
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced spinal procedures for various spine conditions and injuries.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Spinal fusion</li>
              <li>• Disc replacement</li>
              <li>• Minimally invasive spine surgery</li>
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
