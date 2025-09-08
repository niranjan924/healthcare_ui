export default function LaparoscopicSurgery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Laparoscopic Surgery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minimally invasive surgical procedures using advanced laparoscopic techniques for faster recovery and reduced scarring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Gallbladder Surgery
            </h3>
            <p className="text-gray-600 mb-4">
              Laparoscopic cholecystectomy for gallstones and gallbladder conditions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Single-incision surgery</li>
              <li>• Robotic assistance</li>
              <li>• Same-day discharge</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Hernia Repair
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced laparoscopic techniques for various types of hernia repair.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Inguinal hernia</li>
              <li>• Umbilical hernia</li>
              <li>• Hiatal hernia</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Appendectomy
            </h3>
            <p className="text-gray-600 mb-4">
              Minimally invasive appendix removal with minimal scarring.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Emergency procedures</li>
              <li>• Quick recovery</li>
              <li>• Reduced pain</li>
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
