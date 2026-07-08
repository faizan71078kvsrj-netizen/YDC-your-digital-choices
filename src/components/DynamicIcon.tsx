import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 24 }: DynamicIconProps) {
  // Map specific icon name strings to actual Lucide Icon Components
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default fallback if the icon name is invalid or not found
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
