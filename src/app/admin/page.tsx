'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  MessageCircle, 
  Search, 
  Filter, 
  Plus, 
  ShieldCheck, 
  ArrowLeft,
  Activity
} from 'lucide-react';
import { HEALTH_PACKAGES } from '@/data/packages';
import { DOCTORS } from '@/data/doctors';

interface AppointmentRecord {
  id: string;
  patientName: string;
  phone: string;
  type: 'consultation' | 'package';
  item: string;
  date: string;
  slot: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
}

const initialRecords: AppointmentRecord[] = [
  {
    id: "APT-1001",
    patientName: "M. Ramachandran",
    phone: "98421 54321",
    type: "package",
    item: "Master Health Check-Up (Heart Check-Up) - ₹2050",
    date: "2026-09-15",
    slot: "Morning (9:30 AM)",
    status: "Confirmed"
  },
  {
    id: "APT-1002",
    patientName: "K. Selvi",
    phone: "94432 11987",
    type: "consultation",
    item: "Dr. P. Anitha (Obstetrics & Gynaecology)",
    date: "2026-09-15",
    slot: "Morning (10:30 AM)",
    status: "Pending"
  },
  {
    id: "APT-1003",
    patientName: "A. Subhash",
    phone: "97890 22345",
    type: "package",
    item: "Basic Health Check-Up - ₹195",
    date: "2026-09-15",
    slot: "Morning (8:00 AM Fasting)",
    status: "Confirmed"
  },
  {
    id: "APT-1004",
    patientName: "T. Arumugam",
    phone: "94880 77654",
    type: "package",
    item: "Master Diabetic Check-Up - ₹1200",
    date: "2026-09-16",
    slot: "Morning (8:30 AM)",
    status: "Pending"
  },
  {
    id: "APT-1005",
    patientName: "Dr. Murugan Consultation",
    phone: "99441 33210",
    type: "consultation",
    item: "Dr. K. Murugan (General Medicine)",
    date: "2026-09-16",
    slot: "Evening (6:00 PM)",
    status: "Confirmed"
  }
];

export default function AdminPortal() {
  const [appointments, setAppointments] = useState<AppointmentRecord[]>(initialRecords);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Appointment Form State
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newType, setNewType] = useState<'consultation' | 'package'>('package');
  const [newItem, setNewItem] = useState('');
  const [newDate, setNewDate] = useState('2026-09-16');
  const [newSlot, setNewSlot] = useState('Morning (9:30 AM)');

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: AppointmentRecord = {
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: newName,
      phone: newPhone,
      type: newType,
      item: newItem || (newType === 'package' ? HEALTH_PACKAGES[0].name.en : DOCTORS[0].name.en),
      date: newDate,
      slot: newSlot,
      status: 'Confirmed'
    };

    setAppointments([newRecord, ...appointments]);
    setShowAddModal(false);
    setNewName('');
    setNewPhone('');
  };

  const handleStatusChange = (id: string, newStatus: 'Pending' | 'Confirmed' | 'Completed') => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status: newStatus } : a));
  };

  const filteredAppointments = appointments.filter(a => {
    const matchSearch = a.patientName.toLowerCase().includes(searchQuery.toLowerCase()) || a.phone.includes(searchQuery);
    const matchFilter = filterStatus === 'all' || a.status.toLowerCase() === filterStatus.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* ADMIN HEADER */}
      <header className="bg-navy-950 text-white py-4 px-6 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-400 hover:text-white flex items-center gap-1 text-xs font-semibold">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Hospital Website</span>
            </Link>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-vital-400 animate-pulse" />
              <span className="font-extrabold text-sm sm:text-base text-white">
                NMS Hospital • Reception & Staff Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-slate-800 text-sky-300 px-3 py-1 rounded-full border border-slate-700">
              Sankarankovil Reception Desk
            </span>
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTENT */}
      <div className="max-w-7xl mx-auto p-6 sm:p-8 space-y-8">
        {/* STAT METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Bookings</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{appointments.length}</div>
            </div>
            <div className="p-3 rounded-2xl bg-hospital-50 text-hospital-600">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Confirmation</span>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 mt-1">
                {appointments.filter(a => a.status === 'Pending').length}
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Confirmed</span>
              <div className="text-2xl sm:text-3xl font-black text-vital-600 mt-1">
                {appointments.filter(a => a.status === 'Confirmed').length}
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-vital-50 text-vital-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Health Packages</span>
              <div className="text-2xl sm:text-3xl font-black text-sky-600 mt-1">
                {appointments.filter(a => a.type === 'package').length}
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-sky-50 text-sky-600">
              <Activity className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* APPOINTMENT MANAGEMENT TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {/* TABLE CONTROLS */}
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search patient or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hospital-500"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-200 bg-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-hospital-600 hover:bg-hospital-700 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Walk-in Appointment</span>
            </button>
          </div>

          {/* TABLE DATA */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-4 font-bold">ID</th>
                  <th className="p-4 font-bold">Patient Name</th>
                  <th className="p-4 font-bold">Phone Number</th>
                  <th className="p-4 font-bold">Service / Package</th>
                  <th className="p-4 font-bold">Scheduled Date</th>
                  <th className="p-4 font-bold">Slot</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAppointments.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-mono font-bold text-slate-500">{record.id}</td>
                    <td className="p-4 font-bold text-slate-900">{record.patientName}</td>
                    <td className="p-4 text-slate-700">{record.phone}</td>
                    <td className="p-4 font-medium text-slate-800">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mr-1.5 uppercase ${
                        record.type === 'package' ? 'bg-vital-50 text-vital-700' : 'bg-hospital-50 text-hospital-700'
                      }`}>
                        {record.type}
                      </span>
                      {record.item}
                    </td>
                    <td className="p-4 text-slate-600">{record.date}</td>
                    <td className="p-4 text-slate-600">{record.slot}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                        record.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : record.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`tel:${record.phone.replace(/[^0-9]/g, '')}`}
                          title="Call Patient"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={`https://wa.me/91${record.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${record.patientName}, your appointment at NMS Hospital for ${record.item} on ${record.date} (${record.slot}) is confirmed. Please arrive on time.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Message on WhatsApp"
                          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>

                        {record.status === 'Pending' && (
                          <button
                            onClick={() => handleStatusChange(record.id, 'Confirmed')}
                            className="text-[11px] font-bold bg-hospital-600 text-white px-2.5 py-1 rounded-lg"
                          >
                            Confirm
                          </button>
                        )}

                        {record.status === 'Confirmed' && (
                          <button
                            onClick={() => handleStatusChange(record.id, 'Completed')}
                            className="text-[11px] font-bold bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg"
                          >
                            Complete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD WALK-IN MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Add Walk-in or Phone Booking</h3>

            <form onSubmit={handleAddAppointment} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">Patient Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Patient Name"
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Mobile Phone</label>
                <input
                  type="tel"
                  required
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  >
                    <option value="package">Health Package</option>
                    <option value="consultation">Doctor Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold block mb-1">Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Select Service</label>
                {newType === 'package' ? (
                  <select
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  >
                    {HEALTH_PACKAGES.map(p => (
                      <option key={p.id} value={`${p.name.en} - ₹${p.price}`}>
                        {p.name.en} (₹{p.price}/-)
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  >
                    {DOCTORS.map(d => (
                      <option key={d.id} value={`${d.name.en} (${d.departmentName.en})`}>
                        {d.name.en} — {d.departmentName.en}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-hospital-600 hover:bg-hospital-700 text-white font-bold"
                >
                  Save Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
