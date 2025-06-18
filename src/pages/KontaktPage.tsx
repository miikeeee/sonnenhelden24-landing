import RatgeberHeader from "@/components/RatgeberHeader";
import RatgeberFooter from "@/components/RatgeberFooter";
import { useState } from 'react';

const KontaktPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    nachricht: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('https://formspree.io/f/xwkgyyqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.nachricht,
          _replyto: form.email,
          _subject: 'Kontaktanfrage badhelden24',
          to: 'mike.mildenberger@live.de'
        })
      });
      setStatus('success');
      setForm({ name: '', email: '', nachricht: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <RatgeberHeader onCTAClick={() => window.location.href = '/kontakt'} />
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-12 px-4">
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kontakt</h1>
          <p className="text-gray-600 mb-6">Du hast Fragen, Wünsche oder möchtest ein Angebot? Fülle einfach das Formular aus und wir melden uns schnellstmöglich bei dir. Wir freuen uns auf deine Nachricht!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="nachricht">Nachricht</label>
              <textarea
                id="nachricht"
                name="nachricht"
                value={form.nachricht}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Senden...' : 'Nachricht senden'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 mt-4">Vielen Dank für deine Nachricht! Wir melden uns schnellstmöglich.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-4">Fehler beim Senden. Bitte versuche es später erneut.</p>
            )}
          </form>
        </div>
      </main>
      <RatgeberFooter />
    </div>
  );
};

export default KontaktPage;
