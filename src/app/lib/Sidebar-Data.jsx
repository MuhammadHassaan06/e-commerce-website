import Dashboard from '@/components/Icons/Dashboard';
import Itemsicon from '@/components/Icons/Itemsicon';
import Usericon from '@/components/Icons/Usericon';
import Categoriesicon from '@/components/Icons/Categoriesicon';
export const navItems = [
  { id: 'dashboard', 
    label: 'Dashboard', 
    Icon: Dashboard, 
    isActive: false, 
    paddingClass: 'pr-10' 
  },
  { id: 'users', 
    label: 'Users', 
    Icon: Usericon, 
    isActive: true, 
    paddingClass: 'pr-20' 
  },
  { id: 'items', 
    label: 'Items', 
    Icon: Itemsicon, 
    isActive: false, 
    paddingClass: 'pr-19' 
  },
  { id: 'categories', 
    label: 'Categories', 
    Icon: Categoriesicon, 
    isActive: false, 
    paddingClass: 'pr-10' 
  },
];