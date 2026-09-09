import React from 'react';
import { Star, Quote, ShieldCheck, Heart } from 'lucide-react';
import { content } from '../translations/content';

export default function Testimonials({ lang }) {
  const t = content[lang].testimonials;

  return (
    <section className="py-24 bg-[#0D1322] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#111827] border border-white/10 p-7 glass-panel-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Badge & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-emerald-500/40 transition-colors" />
                </div>

                {/* Quote text */}
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-slate-800 flex items-center space-x-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/60"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-sm font-bold text-white truncate">{rev.name}</h4>
                    <span className="text-sm">{rev.flag}</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium block truncate">
                    {rev.location}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {rev.badge}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
