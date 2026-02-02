export async function getPortfolioData() {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return null;
  }
}

export function getIconComponent(iconName) {
  const iconMap = {
    'FiPenTool': () => import('react-icons/fi').then(mod => mod.FiPenTool),
    'FiCode': () => import('react-icons/fi').then(mod => mod.FiCode),
    'FiSettings': () => import('react-icons/fi').then(mod => mod.FiSettings),
  };
  
  return iconMap[iconName] || null;
}