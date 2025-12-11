import React from "react";

export default function Industry() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top App Bar */}
      <header className="w-full border-b border-slate-800 bg-slate-900/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-sm font-bold">
              <span>EX</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide">
                Elixgen CRM
              </span>
              <span className="text-xs text-slate-400">
                Leads &amp; Pipelines
              </span>
            </div>
          </div>

          {/* Middle: Breadcrumb */}
          <nav className="hidden md:block">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="hover:text-slate-100 cursor-pointer transition">
                Leads
              </span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-200 font-medium">Pipelines</span>
            </div>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 hover:bg-slate-800 transition"
            >
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(45,212,191,0.35)]" />
              <svg
                className="h-4 w-4 text-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path d="M14.857 17.657L14 21l-1.857-3.343A8.001 8.001 0 013.343 10H3a1 1 0 010-2h.343a8.001 8.001 0 0115.314 0H19a1 1 0 010 2h-.343a8.001 8.001 0 01-3.8 7.657z" />
              </svg>
            </button>

            <button
              type="button"
              className="h-9 rounded-full border border-emerald-500/70 bg-emerald-500 text-xs font-medium px-4 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              + New Lead
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6 lg:py-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          {/* Left: Form card */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-xl shadow-black/40">
            <div className="border-b border-slate-800 px-5 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-slate-50">
                  Customer Information
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Capture all lead details in one clean view.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live CRM
              </span>
            </div>

            <div className="px-5 pb-5 pt-4 grid gap-4 md:grid-cols-2">
              {/* Company Name */}
              <div className="md:col-span-2">
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Ex: Shakti Forgings Pvt. Ltd."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Industry Type */}
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Industry Type
                </label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Select industry</option>
                  <option>Manufacturing</option>
                  <option>Textile</option>
                  <option>Forging</option>
                  <option>Plastic Molding</option>
                  <option>Automotive</option>
                  <option>Food &amp; Beverage</option>
                  <option>Pharmaceutical</option>
                  <option>Other (Specify)</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Location of Plant (District)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Nagpur"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Business Needs */}
              <div className="md:col-span-2">
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Business Needs
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Reduce energy cost, real-time monitoring of plant power, detect PF penalties early..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                />
                <p className="mt-1 text-[10px] text-slate-500">
                  Add specific problems like high energy bills, no visibility,
                  MD/PF penalties, power quality issues, etc.
                </p>
              </div>

              {/* Bottom actions */}
              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center rounded-full bg-slate-800/70 px-2.5 py-1 text-[10px] text-slate-300">
                    Stage: <span className="ml-1 font-medium">New Lead</span>
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-800/70 px-2.5 py-1 text-[10px] text-slate-300">
                    Source: <span className="ml-1 font-medium">Plant Visit</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="h-8 rounded-xl border border-slate-700 bg-slate-900 px-3 text-[11px] text-slate-200 hover:bg-slate-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="h-8 rounded-xl bg-emerald-500 px-4 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/30 transition"
                  >
                    Save Lead
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Preview / Image */}
          <aside className="space-y-4">
            {/* Visual mock / screenshot */}
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden shadow-xl shadow-black/40">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />
              <div className="relative p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">
                    Pipeline Preview
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">
                    All Leads
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-400 max-w-xs">
                    View every lead in one board – drag between stages and
                    filter by industry, location and status.
                  </p>
                </div>
                <div className="h-8 rounded-full border border-slate-700 bg-slate-900/70 px-3 inline-flex items-center gap-2 text-[10px] text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live sync with dashboard
                </div>
              </div>

              {/* Placeholder image frame */}
              <div className="relative px-4 pb-4">
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/90 overflow-hidden">
                  {/* Browser top bar */}
                  <div className="flex items-center gap-1 px-3 py-1.5 border-b border-slate-800 bg-slate-950/80">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    <div className="ml-3 flex-1 h-4 rounded-full bg-slate-800/90" />
                  </div>
                  {/* This is where you put your actual UI image/screenshot */}
                  <div className="relative bg-slate-950">
                    <img
                      src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="CRM pipeline preview"
                      className="w-full h-56 object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small info card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300 space-y-2">
              <h4 className="text-[11px] font-semibold tracking-wide text-slate-100">
                How to use this page
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Fill basic company info on the left.</li>
                <li>Save lead – it appears in your pipeline under “All Leads”.</li>
                <li>Later, your sales team can move it across stages.</li>
              </ul>
              <p className="text-[10px] text-slate-500">
                Your UI designer can replace the preview image above with an
                actual screenshot of your pipeline board.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
