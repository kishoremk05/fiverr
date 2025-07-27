import { useState } from 'react';

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessJourney: '',
    comment: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.businessJourney || !formData.comment) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your comment!');
    setFormData({
      name: '',
      email: '',
      businessJourney: '',
      comment: ''
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4 relative">
      <div
        className="bg-amber-50 p-6 relative shadow-2xl"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #e5e5e5 1px, transparent 1px),
            linear-gradient(#e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          transform: 'rotate(-0.5deg)'
        }}
      >
        {/* Red margin line */}
        <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-300 opacity-60"></div>

        {/* Holes */}
        {[12, 24, 36].map(pos => (
          <div
            key={pos}
            className={`absolute left-4 top-${pos} w-3 h-3 bg-white border border-gray-300 rounded-full`}
          ></div>
        ))}

        {/* Paper clip */}
        <div className="absolute -top-3 right-10 w-10 h-6 border-2 border-gray-400 rounded-lg transform rotate-12"></div>

        <div className="relative z-10 ml-6 text-sm">
          <h2
            className="text-2xl font-bold text-gray-800 mb-6 text-center transform -rotate-1"
            style={{ fontFamily: 'cursive' }}
          >
            📝 Share Your Journey
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1 transform -rotate-0.5" style={{ fontFamily: 'cursive' }}>
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 bg-transparent border-b-2 border-blue-400 focus:border-blue-600 outline-none text-gray-800 placeholder-gray-500 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1 transform rotate-0.5" style={{ fontFamily: 'cursive' }}>
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 bg-transparent border-b-2 border-blue-400 focus:border-blue-600 outline-none text-gray-800 placeholder-gray-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 transform rotate-0.5" style={{ fontFamily: 'cursive' }}>
                Business Stage:
              </label>
              <select
                name="businessJourney"
                value={formData.businessJourney}
                onChange={handleInputChange}
                className="w-full px-2 py-1 bg-transparent border-b-2 border-blue-400 focus:border-blue-600 outline-none text-gray-800 text-sm"
              >
                <option value="">✨ Choose...</option>
                <option value="idea-stage">💡 Idea</option>
                <option value="startup">🚀 Startup</option>
                <option value="growth">📈 Growth</option>
                <option value="established">🏢 Established</option>
                <option value="enterprise">🏛️ Enterprise</option>
                <option value="considering">🤔 Considering</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 transform -rotate-0.5" style={{ fontFamily: 'cursive' }}>
                Your thoughts:
              </label>
              <textarea
                name="comment"
                placeholder="Dear diary..."
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-2 py-2 bg-transparent border border-dashed border-blue-400 focus:border-blue-600 outline-none text-gray-800 text-sm resize-none"
              />
            </div>

            <div className="text-center pt-2">
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-bold rounded-md border border-gray-400 shadow transform -rotate-1 hover:rotate-0 transition duration-300 hover:scale-105 text-sm"
                style={{ fontFamily: 'cursive' }}
              >
                📮 Submit
              </button>
            </div>
          </div>

          {/* Decorative icons */}
          <div className="absolute top-2 right-2 text-xl transform rotate-12 opacity-20">✏️</div>
          <div className="absolute bottom-6 left-2 text-lg transform -rotate-12 opacity-20">📎</div>
        </div>
      </div>

      {/* Paper shadow */}
      <div className="absolute inset-0 bg-gray-300 -z-10 transform rotate-1 translate-x-1 translate-y-1"></div>
    </div>
  );
}
