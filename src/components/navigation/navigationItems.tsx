import { BarChart2, BookOpen, FileText, Users } from 'lucide-react';

export const navigationItems = [
  {
    title: 'Products',
    items: [
      {
        title: 'Analytics',
        description: 'Get a better understanding of your traffic',
        icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
        href: '#',
      },
      {
        title: 'Engagement',
        description: 'Speak directly to your customers',
        icon: <Users className="w-6 h-6 text-purple-600" />,
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Blog',
        description: 'The latest industry news and updates',
        icon: <FileText className="w-6 h-6 text-purple-600" />,
        href: '#',
      },
      {
        title: 'Documentation',
        description: 'Start integrating products and tools',
        icon: <BookOpen className="w-6 h-6 text-purple-600" />,
        href: '#',
      },
    ],
  },
];
