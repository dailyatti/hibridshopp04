import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, Calendar, Heart } from 'lucide-react'

export default function BookingPage({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 z-50 overflow-y-auto">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-10 border-b border-orange-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="bg-white/80 hover:bg-white text-gray-700 border-gray-300 hover:border-orange-300 transition-all duration-300 hover:scale-105 rounded-xl px-6 py-3"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Vissza a Főoldalra
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Időpont Foglalás
                </h1>
                <p className="text-sm text-gray-600">Találja meg a tökéletes időpontot</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Foglalja le az <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">időpontját</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ismerje meg imádnivaló kiskutyáinkat személyesen. Professzionális tanácsadás és barátságos környezet várja Önt.
            </p>
          </div>

          {/* Booking Widget Container */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
            <div className="p-8">
              {/* Elfsight Appointment Booking | Untitled Appointment Booking */}
              <script src="https://static.elfsight.com/platform/platform.js" async></script>
              <div className="elfsight-app-9505e852-1906-44b8-bfd1-f71a0e665371" data-elfsight-app-lazy></div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Ingyenes tanácsadás</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Rugalmas időpontok</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Professzionális szolgáltatás</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 