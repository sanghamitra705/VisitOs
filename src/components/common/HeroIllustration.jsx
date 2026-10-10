import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, QrCode, CheckCircle2, User, Building, Clock, MapPin, Sparkles, Bell } from 'lucide-react';

export const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-[#1769D2]/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-52 h-52 rounded-full bg-[#16A6A1]/15 blur-2xl pointer-events-none" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#10243E]/8 border border-[#DCE6EF] overflow-hidden"
      >
        {/* Top Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCE6EF]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#10243E] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-[#27B36A]" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-[#10243E] tracking-tight uppercase block font-sans">
                VISITOR<span className="text-[#1769D2]">_OS</span>
              </span>
              <span className="text-[10px] text-[#5F7185] font-medium">Digital Pass #VOS-9842</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#27B36A]/10 text-[#27B36A] border border-[#27B36A]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-pulse" />
            Active Visitor
          </span>
        </div>

        {/* Visitor Profile Strip */}
        <div className="my-5 p-4 bg-[#EDF6FC] rounded-2xl border border-[#DCE6EF] flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1769D2] to-[#16A6A1] text-white flex items-center justify-center shrink-0 shadow-sm">
            <User className="w-7 h-7" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-[#10243E] truncate">Sarah Jenkins</h4>
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
            </div>
            <p className="text-xs text-[#5F7185] truncate">Apex Innovations • Tech Partner</p>
            <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#5F7185] font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#1769D2]" />
                10:30 AM - 02:00 PM
              </span>
              <span className="flex items-center gap-1">
                <Building className="w-3 h-3 text-[#16A6A1]" />
                Tower B, Floor 4
              </span>
            </div>
          </div>
        </div>

        {/* QR Code & Host Approval Details */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#F3F9FD] p-4 rounded-2xl border border-[#DCE6EF]">
          {/* QR Code Container */}
          <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-[#DCE6EF] flex flex-col items-center justify-center shadow-xs">
            <div className="relative p-1 rounded-lg bg-[#10243E]/5">
              {/* Stylized QR representation */}
              <QrCode className="w-20 h-20 text-[#10243E]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-md bg-[#1769D2] text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
            <span className="text-[9px] font-mono font-bold text-[#5F7185] mt-1.5 uppercase tracking-wider">
              Scan at Lobby
            </span>
          </div>

          {/* Host & Geo-Fence Info */}
          <div className="sm:col-span-7 space-y-2 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5F7185] block">Meeting Host</span>
              <p className="font-bold text-[#10243E]">David Vance (VP Engineering)</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5F7185] block">Security Clearance</span>
              <p className="font-medium text-[#27B36A] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                NDA Signed & Photo Verified
              </p>
            </div>
            <div className="pt-1 text-[10px] text-[#5F7185] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#1769D2]" />
              <span>Geo-Fencing: Main Reception Zone</span>
            </div>
          </div>
        </div>

        {/* Floating Notification Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: 20 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute top-16 -right-2 bg-white rounded-xl shadow-lg border border-[#DCE6EF] p-2.5 flex items-center gap-2.5 animate-float"
        >
          <div className="w-8 h-8 rounded-lg bg-[#27B36A]/15 text-[#27B36A] flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#10243E]">Host Approved</p>
            <p className="text-[9px] text-[#5F7185]">David approved entry in 8s</p>
          </div>
        </motion.div>

        {/* Floating Security Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: -20 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-lg border border-[#DCE6EF] p-2.5 flex items-center gap-2.5 animate-float"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#1769D2]/15 text-[#1769D2] flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#10243E]">Touchless Check-In</p>
            <p className="text-[9px] text-[#5F7185]">Zero app install required</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
