const links = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/comfort-limata',
    icon: 'fab fa-linkedin',
    color: 'text-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/comfortlimata',
    icon: 'fab fa-github',
    color: 'text-gray-800',
  },const links = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/comfort-limata',
    icon: 'fab fa-linkedin',
    color: 'text-blue-600',
    emoji: '💼',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/comfortlimata',
    icon: 'fab fa-github',
    color: 'text-gray-800',
    emoji: '🐙',
  },
  {
    name: 'Email',
    url: 'mailto:comfortlimata@gmail.com',
    icon: 'fas fa-envelope',
    color: 'text-red-500',
    emoji: '✉️',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@comfortlimata1',
    icon: 'fab fa-tiktok',
    color: 'text-black',
    emoji: '🎵',
  },
];

const ContactLinks = () => (
  <section className="py-10 px-4 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl max-w-xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-center text-dark-bg mb-6">Connect with Me</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white hover:bg-opacity-80 shadow-lg transition ${link.color}`}
        >
          <span className="text-2xl">
            {link.emoji}
            {link.name === 'LinkedIn' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            )}
            {link.name === 'GitHub' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            )}
            {link.name === 'Email' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12 13.065l-11.985-7.065v15h23.97v-15l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
            )}
            {link.name === 'TikTok' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12.75 2.25v13.5a3.75 3.75 0 1 1-3.75-3.75h.75a.75.75 0 0 1 0 1.5h-.75a2.25 2.25 0 1 0 2.25 2.25v-13.5h1.5zm6.75 0v2.25a3.75 3.75 0 0 0 3.75 3.75h.75v1.5h-.75a5.25 5.25 0 0 1-5.25-5.25v-2.25h1.5z"/></svg>
            )}
          </span>
          <span className="font-semibold text-lg">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactLinks;const links = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/comfort-limata',
    icon: 'fab fa-linkedin',
    color: 'text-blue-600',
    emoji: '💼',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/comfortlimata',
    icon: 'fab fa-github',
    color: 'text-gray-800',
    emoji: '🐙',
  },
  {
    name: 'Email',
    url: 'mailto:comfortlimata@gmail.com',
    icon: 'fas fa-envelope',
    color: 'text-red-500',
    emoji: '✉️',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@comfortlimata1',
    icon: 'fab fa-tiktok',
    color: 'text-black',
    emoji: '🎵',
  },
];

const ContactLinks = () => (
  <section className="py-10 px-4 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl max-w-xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-center text-dark-bg mb-6">Connect with Me</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white hover:bg-opacity-80 shadow-lg transition ${link.color}`}
        >
          <span className="text-2xl">
            {link.emoji}
            {link.name === 'LinkedIn' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            )}
            {link.name === 'GitHub' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            )}
            {link.name === 'Email' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12 13.065l-11.985-7.065v15h23.97v-15l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
            )}
            {link.name === 'TikTok' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12.75 2.25v13.5a3.75 3.75 0 1 1-3.75-3.75h.75a.75.75 0 0 1 0 1.5h-.75a2.25 2.25 0 1 0 2.25 2.25v-13.5h1.5zm6.75 0v2.25a3.75 3.75 0 0 0 3.75 3.75h.75v1.5h-.75a5.25 5.25 0 0 1-5.25-5.25v-2.25h1.5z"/></svg>
            )}
          </span>
          <span className="font-semibold text-lg">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactLinks;const links = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/comfort-limata',
    icon: 'fab fa-linkedin',
    color: 'text-blue-600',
    emoji: '💼',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/comfortlimata',
    icon: 'fab fa-github',
    color: 'text-gray-800',
    emoji: '🐙',
  },
  {
    name: 'Email',
    url: 'mailto:comfortlimata@gmail.com',
    icon: 'fas fa-envelope',
    color: 'text-red-500',
    emoji: '✉️',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@comfortlimata1',
    icon: 'fab fa-tiktok',
    color: 'text-black',
    emoji: '🎵',
  },
];

const ContactLinks = () => (
  <section className="py-10 px-4 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl max-w-xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-center text-dark-bg mb-6">Connect with Me</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white hover:bg-opacity-80 shadow-lg transition ${link.color}`}
        >
          <span className="text-2xl">
            {link.emoji}
            {link.name === 'LinkedIn' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            )}
            {link.name === 'GitHub' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            )}
            {link.name === 'Email' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12 13.065l-11.985-7.065v15h23.97v-15l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
            )}
            {link.name === 'TikTok' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline ml-1"><path d="M12.75 2.25v13.5a3.75 3.75 0 1 1-3.75-3.75h.75a.75.75 0 0 1 0 1.5h-.75a2.25 2.25 0 1 0 2.25 2.25v-13.5h1.5zm6.75 0v2.25a3.75 3.75 0 0 0 3.75 3.75h.75v1.5h-.75a5.25 5.25 0 0 1-5.25-5.25v-2.25h1.5z"/></svg>
            )}
          </span>
          <span className="font-semibold text-lg">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactLinks;
  {
    name: 'Email',
    url: 'mailto:comfortlimata@gmail.com',
    icon: 'fas fa-envelope',
    color: 'text-red-500',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@comfortlimata1',
    icon: 'fab fa-tiktok',
    color: 'text-black',
  },
];

const ContactLinks = () => (
  <section className="py-10 px-4 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl max-w-xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-center text-dark-bg mb-6">Connect with Me</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white hover:bg-opacity-80 shadow-lg transition ${link.color}`}
        >
          <span className="text-2xl">
            {link.name === 'LinkedIn' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            )}
            {link.name === 'GitHub' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            )}
            {link.name === 'Email' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 13.065l-11.985-7.065v15h23.97v-15l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
            )}
            {link.name === 'TikTok' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.75 2.25v13.5a3.75 3.75 0 1 1-3.75-3.75h.75a.75.75 0 0 1 0 1.5h-.75a2.25 2.25 0 1 0 2.25 2.25v-13.5h1.5zm6.75 0v2.25a3.75 3.75 0 0 0 3.75 3.75h.75v1.5h-.75a5.25 5.25 0 0 1-5.25-5.25v-2.25h1.5z"/></svg>
            )}
          </span>
          <span className="font-semibold text-lg">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactLinks;const links = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/comfort-limata',
    icon: 'fab fa-linkedin',
    color: 'text-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/comfortlimata',
    icon: 'fab fa-github',
    color: 'text-gray-800',
  },
  {
    name: 'Email',
    url: 'mailto:comfortlimata@gmail.com',
    icon: 'fas fa-envelope',
    color: 'text-red-500',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@comfortlimata1',
    icon: 'fab fa-tiktok',
    color: 'text-black',
  },
];

const ContactLinks = () => (
  <section className="py-10 px-4 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-2xl max-w-xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-center text-dark-bg mb-6">Connect with Me</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white hover:bg-opacity-80 shadow-lg transition ${link.color}`}
        >
          <span className="text-2xl">
            {link.name === 'LinkedIn' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            )}
            {link.name === 'GitHub' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            )}
            {link.name === 'Email' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 13.065l-11.985-7.065v15h23.97v-15l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
            )}
            {link.name === 'TikTok' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12.75 2.25v13.5a3.75 3.75 0 1 1-3.75-3.75h.75a.75.75 0 0 1 0 1.5h-.75a2.25 2.25 0 1 0 2.25 2.25v-13.5h1.5zm6.75 0v2.25a3.75 3.75 0 0 0 3.75 3.75h.75v1.5h-.75a5.25 5.25 0 0 1-5.25-5.25v-2.25h1.5z"/></svg>
            )}
          </span>
          <span className="font-semibold text-lg">{link.name}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactLinks;
