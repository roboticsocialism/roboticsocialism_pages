import React from 'react';

const sharedClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80 p-4 rounded-lg flex justify-center items-center w-40 h-40';

const Link = ({ icon, text }) => {
  return (
    <a href="#" className={sharedClasses}>
      <img src={`https://placehold.co/48x48?text=${icon}`} alt={`icon-${text}`} aria-hidden={true} />
      <span className="text-lg font-bold ml-2">{text}</span>
    </a>
  );
};

const LinksContainer = ({ links }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center mx-auto max-w-2xl">
      {links.map((link, index) => (
        <Link key={index} icon={link.icon} text={link.text} />
      ))}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      <img className="absolute top-0 left-0 h-full w-full object-cover" src="https://placehold.co/1920x1080?text=Demo+Banner" alt="Demo Banner" />
    </div>
  );
};

const App = () => {
  const links = [
    { icon: '📚', text: 'Link 1' },
    { icon: '📊', text: 'Link 2' },
    { icon: '📈', text: 'Link 3' },
    { icon: '📁', text: 'Link 4' },
    { icon: '📝', text: 'Link 5' },
    { icon: '📞', text: 'Link 6' },
    { icon: '📺', text: 'Link 7' },
    { icon: '📻', text: 'Link 8' },
    { icon: '📚', text: 'Link 9' },
  ];

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <h1 className="text-5xl text-secondary-foreground font-bold mb-4">Site Name</h1>
        <LinksContainer links={links} />
      </div>
      <Banner />
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <h1 className="text-5xl text-secondary-foreground font-bold mb-4">Site Name</h1>
        <LinksContainer links={links} />
      </div>
    </div>
  );
};

