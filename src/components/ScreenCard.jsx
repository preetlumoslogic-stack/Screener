import { Link } from 'react-router-dom'


function ScreenCard({ screen }) {
  return (
    <Link to={`/screens/${screen.id}/${screen.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
        <p className="text-xs text-gray-600">{screen.description}</p>
      </div>
    </Link>
  )
}

export default ScreenCard

