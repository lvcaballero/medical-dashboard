import React from 'react';
import { Activity, Beaker, ClipboardList, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center space-y-8 bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
          <Activity className="w-12 h-12 text-blue-600" />
        </div>
        
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">
          Med<span className="text-blue-600">Dash</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to the Medical Test Management System. Access patient diagnostics, 
          manage measurement units, and generate clinical reports with ease.
        </p>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <a href="/medicaltests" className="group p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-600 transition-all duration-300 text-left">
            <ClipboardList className="w-8 h-8 text-blue-600 group-hover:text-white mb-4" />
            <h3 className="font-bold text-slate-900 group-hover:text-white text-lg">Medical Tests</h3>
            <p className="text-sm text-slate-500 group-hover:text-blue-100 mt-2">View and export clinical test data.</p>
          </a>

          <a href="/categories" className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-blue-600 transition-all duration-300 text-left">
            <Beaker className="w-8 h-8 text-slate-600 group-hover:text-white mb-4" />
            <h3 className="font-bold text-slate-900 group-hover:text-white text-lg">Categories</h3>
            <p className="text-sm text-slate-500 group-hover:text-blue-100 mt-2">Browse diagnostic test types.</p>
          </a>

          <a href="/units" className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-blue-600 transition-all duration-300 text-left">
            <Activity className="w-8 h-8 text-slate-600 group-hover:text-white mb-4" />
            <h3 className="font-bold text-slate-900 group-hover:text-white text-lg">Units (UOM)</h3>
            <p className="text-sm text-slate-500 group-hover:text-blue-100 mt-2">Manage clinical measurement units.</p>
          </a>
        </div>

        {/* Footer Badge */}
        <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          System Status: Online & Connected to Supabase
        </div>
      </div>
    </div>
  );
}