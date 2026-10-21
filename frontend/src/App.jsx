import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourismServices from './components/TourismServices';
import TourismStatistics from './components/TourismStatistics';
import ExperienceBooking from './components/ExperienceBooking';
import LiveTourismHub from './components/LiveTourismHub';
import MarketplaceView from './components/MarketplaceView';
import Explore3DPage from './components/Explore3DPage';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

// Modals
import HelpBotModal from './components/HelpBotModal';
import EmergencyModal from './components/EmergencyModal';
import ThreeDExplorerModal from './components/ThreeDExplorerModal';
import BookingModal from './components/BookingModal';
import LiveStreamRoom from './components/LiveStreamRoom';
import LoginModal from './components/LoginModal';

import { EXPLORE_3D_DESTINATIONS } from './data/mockData';

export default function App() {
  // Navigation / View State: 'home' | '3d-explorer' | 'booking' | 'live-tourism' | 'marketplace'
  const [currentView, setCurrentView] = useState('home');
  const [activeBookingTab, setActiveBookingTab] = useState('hotels');
  
  // Modals Visibility State
  const [isHelpBotOpen, setIsHelpBotOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isThreeDModalOpen, setIsThreeDModalOpen] = useState(false);
  const [selectedThreeDSpot, setSelectedThreeDSpot] = useState(EXPLORE_3D_DESTINATIONS[0]);
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
      
      {/* Top Navigation Bar with Dynamic Active Pill State */}
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

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME PAGE (Tourism Services, Living Heritage Toggle, & Tourism Statistics) */}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-200">
            {/* Hero Banner */}
            <Hero
              onStartExploring={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpen3D={() => {
                setCurrentView('3d-explorer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Tourism Services: The 6 Core Options */}
            <div id="services-section">
              <TourismServices
                onSelectService={(serviceTab) => handleSelectService(serviceTab)}
                onOpenMarketplace={() => handleSelectService('market')}
                onOpenLiveStream={() => handleSelectService('live')}
              />
            </div>

            {/* Tourism Statistics */}
            <TourismStatistics />
          </div>
        )}

        {/* VIEW 2: 3D EXPLORER PAGE (Interactive Map, 7 Categories, 12 Destinations) */}
        {currentView === '3d-explorer' && (
          <div className="animate-in fade-in duration-200">
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
          <div className="animate-in fade-in duration-200">
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

        {/* VIEW 4: LIVE TOURISM HUB (Live Guides & Scheduled Tours) */}
        {currentView === 'live-tourism' && (
          <div className="animate-in fade-in duration-200">
            <LiveTourismHub
              onJoinLiveTour={(tour) => setActiveLiveTour(tour)}
              onBack={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* VIEW 5: LOCAL MARKETPLACE (Authentic Tribal Crafts & GI Artifacts) */}
        {currentView === 'marketplace' && (
          <div className="animate-in fade-in duration-200">
            <MarketplaceView
              onBack={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

      </main>

      {/* Official Government Footer */}
      <Footer onOpen3D={() => {
        setCurrentView('3d-explorer');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Floating Quick Action Dock */}
      <FloatingActions
        onOpenHelpBot={() => setIsHelpBotOpen(true)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpen3D={() => {
          setCurrentView('3d-explorer');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* MODAL 1: AI Help Bot Assistant */}
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

      {/* MODAL 5: Interactive Live Streaming Room */}
      {activeLiveTour && (
        <LiveStreamRoom
          tour={activeLiveTour}
          onClose={() => setActiveLiveTour(null)}
        />
      )}

      {/* MODAL 6: Role Based Login Portal */}
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
