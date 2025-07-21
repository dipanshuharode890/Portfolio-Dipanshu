import { siteData } from '../data/siteData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href={siteData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${siteData.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
