import React, { useState } from 'react';
import { 
  Filter, 
  UserPlus, 
  ClipboardList, 
  Ship, 
  MailSearch, 
  FileText, 
  RefreshCcw, 
  CheckCircle, 
  Star,
  ArrowDown,
  Building2,
  Users,
  Briefcase
} from 'lucide-react';

export default function App() {
  const [activePhase, setActivePhase] = useState(null);

  const workflowPhases = [
    {
      id: 1,
      title: "Lead Acquisition & Allocation",
      department: "Marketing & Sales Management",
      icon: Filter,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      summary: "Gathering prospects and assigning ownership.",
      details: [
        "Prospects are captured from digital platforms and manual data entries.",
        "Leads funnel into a Central Lead Pool.",
        "Head of Sales reviews the pool and assigns leads to specific Sales Representatives."
      ],
      kpi: "Lead Volume, Lead-to-Rep Assignment Time"
    },
    {
      id: 2,
      title: "RFQ & Requirements Gathering",
      department: "Sales Operations",
      icon: ClipboardList,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
      summary: "Initial customer contact and requirement specification.",
      details: [
        "Sales Rep contacts the assigned lead.",
        "Gathers specific Request for Quotation (RFQ) details.",
        "Dynamically categorizes the request by shipping method (Air, Sea, or Courier), with form inputs adjusting based on the selected method."
      ],
      kpi: "Response Time, RFQ Completion Rate"
    },
    {
      id: 3,
      title: "Vendor Sourcing & Pricing",
      department: "Shipping Departments (Air/Sea/Courier)",
      icon: MailSearch,
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      summary: "Acquiring competitive pricing from external vendors.",
      details: [
        "The specific Shipping Department receives the categorized RFQ.",
        "Department emails external vendors from the approved Vendor Library.",
        "Vendors submit competitive pricing back to the Shipping Department.",
        "Shipping Department reviews initial vendor quotes for accuracy and margin."
      ],
      kpi: "Vendor Response Rate, Sourcing Turnaround Time"
    },
    {
      id: 4,
      title: "Quotation & Negotiation Loop",
      department: "Cross-Functional (Sales & Shipping)",
      icon: RefreshCcw,
      color: "bg-rose-500",
      lightColor: "bg-rose-50",
      textColor: "text-rose-700",
      borderColor: "border-rose-200",
      summary: "Presenting pricing to the customer and handling negotiations.",
      details: [
        "Shipping Department forwards vetted pricing to the Sales Rep.",
        "Sales Rep presents the official quotation to the Lead.",
        "NEGOTIATION LOOP: If the lead pushes back on price, the request cycles back: Sales -> Shipping Dept -> Vendor -> Shipping Dept -> Sales -> Lead."
      ],
      isLoop: true,
      kpi: "Quote-to-Close Ratio, Negotiation Cycle Time"
    },
    {
      id: 5,
      title: "Approval & Execution",
      department: "Shipping & Operations",
      icon: CheckCircle,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      summary: "Finalizing paperwork and executing the shipment.",
      details: [
        "Lead officially approves the selected quotation.",
        "File is transitioned fully to the specific Shipping Department.",
        "Necessary formal documentation is finalized.",
        "Physical shipment is executed and completed."
      ],
      kpi: "On-Time Delivery, Documentation Accuracy"
    },
    {
      id: 6,
      title: "Post-Service Feedback",
      department: "Customer Success",
      icon: Star,
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      summary: "Closing the loop with customer satisfaction metrics.",
      details: [
        "Upon shipment completion, an automated feedback form is sent to the customer.",
        "Customer fills out the evaluation.",
        "Data is permanently stored and visible on the customer's centralized dashboard for future reference."
      ],
      kpi: "Customer Satisfaction (CSAT), Net Promoter Score (NPS)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Logistics Sales & Operations Flow
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            An executive overview of the end-to-end data and process flow, from initial marketing contact to completed service feedback.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Users className="w-4 h-4 text-blue-500" /> Sales / Marketing
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Ship className="w-4 h-4 text-emerald-500" /> Shipping / Ops
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Building2 className="w-4 h-4 text-amber-500" /> External Vendors
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Briefcase className="w-4 h-4 text-slate-700" /> Customer / Lead
          </div>
        </div>

        {/* Timeline / Funnel */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full hidden md:block"></div>

          <div className="space-y-6">
            {workflowPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              const isActive = activePhase === phase.id;

              return (
                <div key={phase.id} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12 group`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center hidden md:flex">
                    <div className={`w-12 h-12 rounded-full ${phase.color} text-white flex items-center justify-center shadow-lg border-4 border-white transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'} relative z-0`}>
                    <div 
                      onClick={() => setActivePhase(isActive ? null : phase.id)}
                      className={`cursor-pointer bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-300 hover:shadow-md
                        ${isActive ? `${phase.borderColor} ring-4 ring-opacity-20 ring-${phase.color.split('-')[1]}-500` : 'border-transparent hover:border-gray-200'}`}
                    >
                      {/* Mobile Icon (hidden on desktop) */}
                      <div className={`w-10 h-10 rounded-full ${phase.color} text-white flex items-center justify-center shadow-sm mb-4 md:hidden`}>
                        <Icon size={18} />
                      </div>

                      <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${phase.textColor}`}>
                        Phase {phase.id} • {phase.department}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2 justify-start md:justify-start">
                        {phase.title}
                        {phase.isLoop && <RefreshCcw size={16} className="text-rose-500 animate-spin-slow" style={{ animationDuration: '3s' }} />}
                      </h3>
                      
                      <p className="text-slate-600 font-medium">
                        {phase.summary}
                      </p>

                      {/* Expandable Details */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                        <div className={`p-4 rounded-xl ${phase.lightColor} border ${phase.borderColor} text-left`}>
                          <ul className="space-y-3 mb-4">
                            {phase.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                                <div className={`mt-1 min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full ${phase.color}`}></div>
                                <span dangerouslySetInnerHTML={{ __html: detail.replace('NEGOTIATION LOOP:', '<strong>NEGOTIATION LOOP:</strong>') }} />
                              </li>
                            ))}
                          </ul>
                          <div className="pt-3 border-t border-white/50">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Management KPI focus:</span>
                            <span className={`text-sm font-semibold ${phase.textColor}`}>{phase.kpi}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Hint */}
                      {!isActive && (
                        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                          <ArrowDown size={14} /> Click to expand details
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Data Architecture Note */}
        <div className="mt-16 bg-slate-900 text-slate-300 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-400" />
            <h3 className="text-xl font-bold text-white">System Data Architecture Note</h3>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Throughout this funnel, a centralized data object (the Lead/RFQ record) is continuously updated. It begins as a simple contact record, expands into categorized RFQ parameters (Air/Sea/Courier fields), attaches arrayed vendor bids, transitions state upon approval, and finally appends CSAT scores. 
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-700">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase">Input</div>
              <div className="text-sm font-semibold text-white">Marketing / Lead Gen</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase">Enrichment</div>
              <div className="text-sm font-semibold text-white">Sales & Vendors</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase">Processing</div>
              <div className="text-sm font-semibold text-white">Shipping Dept</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase">Output</div>
              <div className="text-sm font-semibold text-white">Dashboard Archive</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}