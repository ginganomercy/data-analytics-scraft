import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import postsData from '../../data/posts/posts.json';

export const PostGallery: React.FC = () => {
  const posts = postsData?.posts || [];

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs scroll-mt-24 print-avoid-break">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
            <Camera className="w-4 h-4" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Etalase Portofolio Asli Instagram ({posts.length} Postingan Terekstraksi)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Live Scraped
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Hasil ekstraksi mendalam aset visual karya bouquet asli dari akun @pearl.storeflowers
            </p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/pearl.storeflowers/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
        >
          <span>Buka Profil Instagram</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {posts.map((post: any, idx: number) => (
          <a
            key={post.shortcode || idx}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all block"
          >
            <img
              src={post.imageUrl}
              alt={post.rawAlt || `Karya Pearl Store Flowers ${post.shortcode}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 text-white">
              <span className="font-mono text-[9px] font-bold text-white/90">
                #{post.shortcode}
              </span>
              <span className="text-[10px] font-sans line-clamp-2 text-slate-200 leading-tight">
                {post.rawAlt || 'Lihat Postingan'}
              </span>
            </div>
            <div className="absolute top-1.5 right-1.5 bg-black/50 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
