'use client';

import { useState, useEffect } from 'react';

export default function ChatPreview() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'her',
      original: 'Xin chào! Tôi là Linh. Rất vui được gặp bạn.',
      translated: '안녕하세요! 저는 린입니다. 만나서 반가워요.',
      time: '오후 2:30',
    },
  ]);

  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    // 자동으로 대화 시뮬레이션
    const timer1 = setTimeout(() => {
      setMessages(prev => [...prev, {
        id: 2,
        sender: 'me',
        original: '안녕하세요 린! 만나서 반갑습니다 😊',
        translated: 'Xin chào Linh! Rất vui được gặp bạn.',
        time: '오후 2:31',
      }]);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowTyping(true);
    }, 3500);

    const timer3 = setTimeout(() => {
      setShowTyping(false);
      setMessages(prev => [...prev, {
        id: 3,
        sender: 'her',
        original: 'Bạn thích làm gì vào cuối tuần?',
        translated: '주말에는 주로 뭐 하세요?',
        time: '오후 2:32',
      }]);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-4 flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
          👩
        </div>
        <div>
          <h3 className="font-bold text-lg">Linh Nguyen</h3>
          <p className="text-sm text-white/80 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            온라인
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-4 bg-gray-50 h-96 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message.sender === 'me' ? 'order-1' : 'order-2'}`}>
              <div
                className={`rounded-2xl p-3 ${
                  message.sender === 'me'
                    ? 'bg-rose-500 text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                }`}
              >
                <p className="text-sm">{message.original}</p>
              </div>

              {/* Translation */}
              <div className="mt-1 px-2">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  🤖 {message.translated}
                </p>
              </div>

              <p className="text-xs text-gray-400 mt-1 px-2">{message.time}</p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {showTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-none p-3 shadow-md">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-rose-400"
            disabled
          />
          <button className="bg-rose-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-rose-600 transition-all">
            전송
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          ✨ AI가 자동으로 번역합니다
        </p>
      </div>
    </div>
  );
}
