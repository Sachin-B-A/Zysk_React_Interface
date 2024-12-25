import React from 'react';

type LinkGroup = {
  title: string;
  links: string[];
};

type FooterLinksProps = {
  groups: LinkGroup[];
};

export default function FooterLinks({ groups }: FooterLinksProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
      {groups.map((group, index) => (
        <div key={index}>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">{group.title}</h3>
          <ul className="space-y-2">
            {group.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}