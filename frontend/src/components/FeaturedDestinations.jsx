import React from 'react';

export default function FeaturedDestinations({ onSelectDestination }) {
  const featured = [
    {
      id: 1,
      name: 'Hundru Falls',
      subtitle: '74m high waterfall near Ranchi',
      tag: 'waterfall',
      tagIcon: '≡',
      image: '/figma_assets/featured_hundru.png'
    },
    {
      id: 2,
      name: 'Tribal Festivals',
      subtitle: 'Experience authentic Santhali culture',
      tag: 'culture',
      tagIcon: '👥',
      image: '/figma_assets/featured_tribal.png'
    },
    {
      id: 3,
      name: 'Palamau Tiger Reserve',
      subtitle: 'Wildlife sanctuary and tiger conservation',
      tag: 'wildlife',
      tagIcon: '▲',
      image: '/figma_assets/featured_palamau.png'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title matching Figma media_1792581964310_b4280969.png */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Featured Destinations
          </h2>
        </div>

        {/* 3 Cards Grid matching Figma exact layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featured.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDestination && onSelectDestination(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500 font-normal">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
