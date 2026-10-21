import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
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
import RoleDashboardModal from './components/RoleDashboardModal';

import { FIGMA_3D_DESTINATIONS } from './components/Explore3DPage';

export default function App() {
  // Navigation State from URL search params or default: 'home' | '3d-explorer' | 'booking' | 'live-tourism' | 'marketplace'
  const getInitialView = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('view');
      if (v) return v;
    }
    return 'home';
  };

  const getInitialTab = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const t = params.get('tab');
      if (t) return t;
    }
    return 'hotels';
  };

  const [currentView, setCurrentView] = useState(getInitialView);
  const [activeBookingTab, setActiveBookingTab] = useState(getInitialTab);
  
  // Modals Visibility State
  const [isHelpBotOpen, setIsHelpBotOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isThreeDModalOpen, setIsThreeDModalOpen] = useState(false);
  const [selectedThreeDSpot, setSelectedThreeDSpot] = useState(FIGMA_3D_DESTINATIONS[0]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState('tourist');
  const [isRoleDashboardOpen, setIsRoleDashboardOpen] = useState(false);

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
      
      {/* 1. Top Navigation Bar matching Figma Screenshot */}
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
        onOpenDashboard={() => setIsRoleDashboardOpen(true)}
        onLogout={() => {
          setUser(null);
          setIsRoleDashboardOpen(false);
        }}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME PAGE (Sequential Figma design: Hero -> Featured Destinations -> Tourism Services -> Tourism Statistics) */}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-150">
            {/* 1. Hero Section matching Figma media_1792581964300_dab2f44f.png */}
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

            {/* 2. Featured Destinations matching Figma media_1792581964310_b4280969.png */}
            <FeaturedDestinations
              onSelectDestination={(dest) => {
                const found = FIGMA_3D_DESTINATIONS.find(d => d.name === dest.name);
                handleOpen3DView(found || FIGMA_3D_DESTINATIONS[0]);
              }}
            />

            {/* 3. Tourism Services matching Figma media_1792581964363_34582567.png */}
            <div id="services-section">
              <TourismServices
                onSelectService={(serviceTab) => handleSelectService(serviceTab)}
                onOpenMarketplace={() => handleSelectService('market')}
                onOpenLiveStream={() => handleSelectService('live')}
              />
            </div>

            {/* 4. Tourism Statistics matching Figma media_1792582024687_2674ec66.png */}
            <TourismStatistics />
          </div>
        )}

        {/* VIEW 2: 3D EXPLORER PAGE (Matching Figma media_1792583542880_71e5858d.png) */}
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

        {/* VIEW 3: BOOKING EXPERIENCE (Matching Figma media_1792581964326_fc75f990.png) */}
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

        {/* VIEW 4: LIVE TOURISM HUB (Matching Figma media_1792582024713_71048886.png) */}
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

        {/* VIEW 5: LOCAL MARKETPLACE (Tribal Crafts & Fair-Trade GI Products) */}
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

      {/* Official Government Footer */}
      <Footer onOpen3D={() => {
        setCurrentView('3d-explorer');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

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

      {/* MODAL 5: Interactive Live Stream Room (Matching Figma media_1792582051194_d4f1a3c9.png) */}
      {activeLiveTour && (
        <LiveStreamRoom
          tour={activeLiveTour}
          onClose={() => setActiveLiveTour(null)}
        />
      )}

      {/* MODAL 6: Role Based Login Dialog (Matching Figma media_1792583542897_c6c8ddcc.png) */}
      {isLoginOpen && (
        <LoginModal
          initialRole={loginRole}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={(loggedUser) => {
            setUser(loggedUser);
            setIsRoleDashboardOpen(true);
          }}
        />
      )}

      {/* MODAL 7: Role Based User Dashboard */}
      {isRoleDashboardOpen && user && (
        <RoleDashboardModal
          user={user}
          onClose={() => setIsRoleDashboardOpen(false)}
          onLogout={() => {
            setUser(null);
            setIsRoleDashboardOpen(false);
          }}
        />
      )}

    </div>
  );
}
