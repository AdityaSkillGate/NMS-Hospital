'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, Send, X, AlertTriangle, PhoneCall, Sparkles, MessageCircle, RotateCcw } from 'lucide-react';
import { CHATBOT_KNOWLEDGE, EMERGENCY_KEYWORDS, ChatbotQA } from '@/data/chatbotKnowledge';
import { Language, TRANSLATIONS } from '@/data/translations';

interface Message {
  id: string;
  sender: 'bot' | 'user' | 'alert';
  text: string;
  timestamp: string;
}

interface NMSCareAssistantProps {
  currentLang: Language;
}

export const NMSCareAssistant: React.FC<NMSCareAssistantProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language or modal opens
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          sender: 'bot',
          text: t.chatbot.welcome,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [t.chatbot.welcome, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Check emergency guardrails
    const lower = query.toLowerCase();
    const isEmergency = EMERGENCY_KEYWORDS.some((kw) => lower.includes(kw.toLowerCase()));

    setTimeout(() => {
      if (isEmergency) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'alert',
            text: t.chatbot.emergencyAlert,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        return;
      }

      // Keyword matching
      let matchedQA: ChatbotQA | undefined;
      for (const qa of CHATBOT_KNOWLEDGE) {
        if (qa.keywords.some((kw) => lower.includes(kw.toLowerCase()))) {
          matchedQA = qa;
          break;
        }
      }

      if (matchedQA) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: matchedQA!.answer[currentLang],
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        const fallbackText =
          currentLang === 'ta'
            ? `மன்னிக்கவும், உங்கள் கேள்விக்கு எங்கள் வரவேற்பறை குழு நேரடி விளக்கம் அளிக்க முடியும். தயவுசெய்து 04636 225315 என்ற எண்ணிற்கு அழைக்கவும் அல்லது வாட்ஸ்அப் மூலம் உடனடியாக தொடர்பு கொள்ளவும்.`
            : `I could not find an exact answer for that query. Our hospital care desk can assist you immediately. Please call 04636 225315 or connect directly via WhatsApp.`;

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: fallbackText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    }, 400);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: t.chatbot.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* CHATBOT DRAWER / POPUP */}
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-80 sm:w-96 max-h-[580px] h-[580px] flex flex-col overflow-hidden animate-fadeIn">
          {/* HEADER */}
          <div className="p-4 bg-gradient-to-r from-hospital-900 to-navy-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-vital-500 text-slate-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none flex items-center gap-1.5">
                  <span>{t.chatbot.title}</span>
                  <span className="w-2 h-2 rounded-full bg-vital-400 animate-pulse" />
                </h3>
                <p className="text-[10px] text-slate-300 mt-1">{t.chatbot.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reset Chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* SAFETY NOTICE BANNER */}
          <div className="bg-amber-50 border-b border-amber-200/70 px-3 py-1.5 text-[10px] text-amber-900 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="line-clamp-1">{t.chatbot.disclaimer}</span>
          </div>

          {/* CHAT LOG */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-hospital-600 text-white rounded-br-none'
                      : msg.sender === 'alert'
                      ? 'bg-red-50 text-red-900 border border-red-200 font-medium'
                      : 'bg-slate-100 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.sender === 'alert' && (
                    <div className="flex items-center gap-1.5 font-bold text-red-700 mb-1">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span>EMERGENCY DIRECTIVE</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] text-slate-400 mt-0.5 px-1">{msg.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* SUGGESTED PROMPT CHIPS */}
          <div className="px-3 py-2 bg-slate-50 border-t border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.chatbot.suggestedQuestions}
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {CHATBOT_KNOWLEDGE.slice(0, 5).map((qa) => (
                <button
                  key={qa.id}
                  onClick={() => handleSend(qa.question[currentLang])}
                  className="whitespace-nowrap text-[11px] bg-white border border-slate-200 hover:border-hospital-400 text-slate-700 hover:text-hospital-700 px-2.5 py-1 rounded-full shadow-2xs transition-colors shrink-0"
                >
                  {qa.question[currentLang]}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT FORM */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.chatbot.typePlaceholder}
              className="flex-1 text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hospital-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-hospital-600 hover:bg-hospital-700 text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* CHATBOT TRIGGER BUTTON */
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-hospital-700 to-sky-500 hover:from-hospital-600 hover:to-sky-400 text-white rounded-full shadow-xl hover:shadow-hospital-500/40 transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Open NMS Care Assistant AI Chatbot"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-300"></span>
          </span>
          <Bot className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};
