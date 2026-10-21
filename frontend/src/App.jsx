import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TourismServices from './components/TourismServices';
import TourismStatistics from './components/TourismStatistics';
import ExperienceBooking from './components/ExperienceBooking';
import LiveTourismHub from './components/LiveTourismHub';
import MarketplaceView from './components/MarketplaceView';
import Explore3DPage from './components/Explore3DPage';
import FloatingActions from './components/FloatingActions';

// Modals
import HelpBotModal from './components/HelpBotModal';
import EmergencyModal from './components/EmergencyModal';
import ThreeDExplorerModal from './components/ThreeDExplorerModal';
import BookingModal from './components/BookingModal';
import LiveStreamRoom from './components/LiveStreamRoom';
import LoginModal from './components/LoginModal';

import { FIGMA_3D_DESTINATIONS } from './components/Explore3DPage';

export default function App() {
  // Navigation State: 'home' | '3d-explorer' | 'booking' | 'live-tourism' | 'marketplace'
  const [currentView, setCurrentView] = useState('home');
  const [activeBookingTab, setActiveBookingTab] = useState('hotels');
  
  // Modals Visibility State
  const [isHelpBotOpen, setIsHelpBotOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isThreeDModalOpen, setIsThreeDModalOpen] = useState(false);
  const [selectedThreeDSpot, setSelectedThreeDSpot] = useState(FIGMA_3D_DESTINATIONS[0]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState('tourist');

  // Active Live Tour Room state
  const [activeLiveTour, setActiveLiveTour] = useState(null);

  // Booking item state
  const [bookingItem, setBookingItem] = useState(null);
  const [bookingCategory, setBookingCategory] = useState('hotels');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Auth state
  const [user, setUser] = useState(null);

  // Handle clicking any of the 6 Tourism Services cards
  const handleSelectService = (serviceId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (serviceId === 'hotels') {
      setActiveBookingTab('hotels');
      setCurrentView('booking');
    } else if (serviceId === 'guides') {
      setActiveBookingTab('guides');
      setCurrentView('booking');
    } else if (serviceId === 'passes' || serviceId === 'festivals') {
      setActiveBookingTab('festivals');
      setCurrentView('booking');
    } else if (serviceId === 'transport') {
      setActiveBookingTab('transport');
      setCurrentView('booking');
    } else if (serviceId === 'live') {
      setCurrentView('live-tourism');
    } else if (serviceId === 'market') {
      setCurrentView('marketplace');
    }
  };

  const handleBookItem = (item, category) => {
    setBookingItem(item);
    setBookingCategory(category);
    setIsBookingModalOpen(true);
  };

  const handleOpen3DView = (destination) => {
    if (destination) {
      setSelectedThreeDSpot(destination);
    }
    setIsThreeDModalOpen(true);
  };

  const handleOpenLoginPage = (role = 'tourist') => {
    setLoginRole(role);
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* Top Navigation Bar matching Figma Screenshot */}
      <Navbar
        activeNav={currentView === '3d-explorer' ? '3d' : currentView === 'home' ? 'home' : ''}
        setActiveNav={(nav) => {
          if (nav === 'home') {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (nav === '3d') {
            setCurrentView('3d-explorer');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenHelpBot={() => setIsHelpBotOpen(true)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpen3D={() => {
          setCurrentView('3d-explorer');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLogin={(role) => handleOpenLoginPage(role)}
        user={user}
        onLogout={() => setUser(null)}
      />

      {/* Main View Content */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME PAGE (Clean Figma design with Tourism Services & Tourism Statistics) */}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-150">
            {/* Tourism Services: The 6 Core Options */}
            <TourismServices
              onSelectService={(serviceTab) => handleSelectService(serviceTab)}
              onOpenMarketplace={() => handleSelectService('market')}
              onOpenLiveStream={() => handleSelectService('live')}
            />

            {/* Tourism Statistics */}
            <TourismStatistics />
          </div>
        )}

        {/* VIEW 2: 3D EXPLORER PAGE (Matching Figma Screenshots 3, 4, 5) */}
        {currentView === '3d-explorer' && (
          <div className="animate-in fade-in duration-150">
            <Explore3DPage
              onSelectDestination={(dest) => handleOpen3DView(dest)}
              onBackToHome={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* VIEW 3: BOOKING EXPERIENCE (Hotels, Guides, Passes, Transport) */}
        {currentView === 'booking' && (
          <div className="animate-in fade-in duration-150">
            <ExperienceBooking
              activeTab={activeBookingTab}
              setActiveTab={setActiveBookingTab}
              onBookItem={handleBookItem}
              onBack={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* VIEW 4: LIVE TOURISM HUB (Ravi Kumar, Sunita Devi & Scheduled Tours) */}
        {currentView === 'live-tourism' && (
          <div className="animate-in fade-in duration-150">
            <LiveTourismHub
              onJoinLiveTour={(tour) => setActiveLiveTour(tour)}
              onBack={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* VIEW 5: LOCAL MARKETPLACE (Tribal Crafts & GI Artifacts) */}
        {currentView === 'marketplace' && (
          <div className="animate-in fade-in duration-150">
            <MarketplaceView
              onBack={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

      </main>

      {/* Floating Action Dock matching Figma bottom right */}
      <FloatingActions
        onOpenHelpBot={() => setIsHelpBotOpen(true)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpen3D={() => {
          setCurrentView('3d-explorer');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* MODAL 1: AI Help Bot */}
      {isHelpBotOpen && (
        <HelpBotModal onClose={() => setIsHelpBotOpen(false)} />
      )}

      {/* MODAL 2: Emergency SOS Contacts */}
      {isEmergencyOpen && (
        <EmergencyModal onClose={() => setIsEmergencyOpen(false)} />
      )}

      {/* MODAL 3: 3D Virtual Tour Viewer */}
      {isThreeDModalOpen && (
        <ThreeDExplorerModal
          destination={selectedThreeDSpot}
          onClose={() => setIsThreeDModalOpen(false)}
        />
      )}

      {/* MODAL 4: Booking Reservation Dialog */}
      {isBookingModalOpen && (
        <BookingModal
          item={bookingItem}
          category={bookingCategory}
          onClose={() => {
            setIsBookingModalOpen(false);
            setBookingItem(null);
          }}
        />
      )}

      {/* MODAL 5: Interactive Live Stream Room (matching media_1792582051194_d4f1a3c9.png) */}
      {activeLiveTour && (
        <LiveStreamRoom
          tour={activeLiveTour}
          onClose={() => setActiveLiveTour(null)}
        />
      )}

      {/* MODAL 6: Role Based Login Dialog */}
      {isLoginOpen && (
        <LoginModal
          initialRole={loginRole}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={(loggedUser) => setUser(loggedUser)}
        />
      )}

    </div>
  );
}
