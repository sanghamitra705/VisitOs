import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bell, 
  UserCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Check,
  X
} from 'lucide-react';

export const NotificationShowcase = () => {
  const [approvedId, setApprovedId] = useState(null);

  const notifications = [
    {
      id: '1',
      icon: UserCheck,
      iconBg: 'bg-[#EDF6FC] text-[#1769D2]',
      title: 'New Visitor',
      description: 'Sarah Jenkins has arrived at Main Lobby.',
      timestamp: '10:42 AM',
      unread: true,
      hasDot: true,
      dotColor: 'bg-[#1769D2]'
    },
    {
      id: '2',
      icon: ShieldAlert,
      iconBg: 'bg-[#16A6A1]/15 text-[#16A6A1]',
      title: 'Host Approval',
      description: 'Visitor approval required for high-security floor.',
      timestamp: '10:43 AM',
      unread: true,
      hasDot: true,
      dotColor: 'bg-[#16A6A1]',
      actionRequired: true
    },
    {
      id: '3',
      icon: CheckCircle2,
      iconBg: 'bg-[#27B36A]/15 text-[#27B36A]',
      title: 'Visitor Approved',
      description: 'David approved entry — Digital badge issued.',
      timestamp: '10:44 AM',
      unread: false,
      hasDot: true,
      dotColor: 'bg-[#27B36A]'
    },
    {
      id: '4',
      icon: Calendar,
      iconBg: 'bg-[#1769D2]/10 text-[#1769D2]',
      title: 'Meeting Reminder',
      description: 'Visitor meeting starts in 10 minutes (Boardroom B).',
      timestamp: '10:50 AM',
      unread: false,
      hasDot: false
    },
    {
      id: '5',
      icon: ShieldCheck,
      iconBg: 'bg-white/80 text-[#5F7185]',
      title: 'Workplace Headcount',
      description: 'Automated 100% emergency roll-call audit synchronized.',
      timestamp: '9:30 AM',
      unread: false,
      hasDot: false,
      isFaded: true
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#0B1F38] via-[#10243E] to-[#0B1F38] text-white border-b border-[#DCE6EF]/20">
      {/* Dynamic Atmospheric Gradient Light (VisitOS Blue -> Teal -> Green) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#1769D2]/25 blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-[#16A6A1]/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-[#27B36A]/15 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              REAL-TIME VISITOR NOTIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight font-sans">
            Know Who's Arriving. The Moment They Arrive.
          </h2>
          <p className="mt-3.5 text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Keep hosts informed from the moment a visitor arrives until their visit is complete.
          </p>
        </div>

        {/* Central Realistic Notification Stack (Direct Reference 2 Translation) */}
        <div className="max-w-3xl mx-auto">
          
          {/* Notifications Title Bar */}
          <div className="flex items-center justify-between pb-4 mb-3 px-2">
            <div className="flex items-center gap-2.5">
              <Bell className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-extrabold text-white tracking-tight font-sans">
                Notifications
              </h3>
            </div>
            <span className="text-xs font-semibold text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Live Stream Active
            </span>
          </div>

          {/* Layered Horizontal Notification Rows */}
          <div className="space-y-3.5">
            {notifications.map((notif, idx) => {
              const IconComp = notif.icon;
              const isApproved = approvedId === notif.id;

              return (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.01, x: 2 }}
                  className={`group bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/20 transition-all duration-200 cursor-pointer ${
                    notif.isFaded ? 'opacity-40 hover:opacity-80' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    
                    {/* Left Icon */}
                    <div className={`w-11 h-11 rounded-xl ${notif.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Middle Text: Title and Description */}
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="text-sm sm:text-base font-bold text-[#10243E] group-hover:text-[#1769D2] transition-colors truncate">
                        {notif.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#5F7185] mt-0.5 truncate">
                        {notif.description}
                      </p>
                    </div>

                    {/* Right Timestamp, Dot & Chevron Arrow */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5F7185]">
                        {notif.hasDot && (
                          <span className={`w-2 h-2 rounded-full ${notif.dotColor}`} />
                        )}
                        <span>{notif.timestamp}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#5F7185] group-hover:text-[#1769D2] group-hover:translate-x-0.5 transition-all" />
                    </div>

                  </div>

                  {/* 1-Click Interactive Host Approval Trigger */}
                  {notif.actionRequired && (
                    <div className="mt-3 pt-3 border-t border-[#DCE6EF] flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#5F7185]">Host action required</span>
                      {isApproved ? (
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-[#27B36A]">
                          <Check className="w-3.5 h-3.5" />
                          <span>Approved</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setApprovedId(notif.id);
                            }}
                            className="px-3 py-1 bg-[#27B36A] hover:bg-[#229B5C] text-white text-xs font-bold rounded-lg transition-all shadow-xs"
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3 py-1 bg-[#F3F9FD] hover:bg-[#DCE6EF] text-[#5F7185] text-xs font-bold rounded-lg transition-all"
                          >
                            Deny
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Explore CTA */}
          <div className="text-center mt-10">
            <Link
              to="/features/real-time-notifications"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 brand-btn-gradient"
            >
              <span>Explore Notifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
