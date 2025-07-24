import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Parcel {
  id: string;
  weight: number;
  status: 'Pending' | 'In Transit' | 'Delivered' | 'Cancelled';
  pickupAddress: string;
  deliveryAddress: string;
  expectedDelivery: string;
  deliveredDate?: string;
  scheduledPickup?: string;
  type: 'sent' | 'received';
}

interface Activity {
  parcelId: string;
  status: 'In Transit' | 'Delivered' | 'Pending' | 'Cancelled';
  date: string;
  icon: string;
}

interface SummaryCard {
  title: string;
  value: string | number;
  icon: string;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboard implements OnInit {
  userName = 'Alex Johnson';
  parcelsInTransit = 4;
  scheduledForTomorrow = 2;

  recentActivities: Activity[] = [
    {
      parcelId: '#P98765',
      status: 'In Transit',
      date: '2025-07-21', // Updated to July 2025
      icon: 'fas fa-truck'
    },
    {
      parcelId: '#P54321',
      status: 'Pending',
      date: '2025-07-23', // Updated to July 2025
      icon: 'fas fa-clock'
    },
    {
      parcelId: '#P10987',
      status: 'Delivered',
      date: '2025-07-18', // Updated to July 2025
      icon: 'fas fa-check'
    }
  ];

  summaryCards: SummaryCard[] = [
    {
      title: 'Total Dispatched',
      value: 28,
      icon: 'fas fa-paper-plane'
    },
    {
      title: 'Total Received',
      value: 35,
      icon: 'fas fa-inbox'
    },
    {
      title: 'Total Expenditures',
      value: 'ksh5200',
      icon: 'fas fa-dollar-sign'
    }
  ];

  sentParcels: Parcel[] = [
    {
      id: '#P98765',
      weight: 3.5,
      status: 'In Transit',
      pickupAddress: '123 Kimathi St, Nairobi, Kenya',
      deliveryAddress: '456 Acacia Ave, Kampala, Uganda',
      expectedDelivery: '2025-07-25', // Updated to July 2025
      type: 'sent'
    },
    {
      id: '#P54321',
      weight: 1.2,
      status: 'Pending',
      pickupAddress: '789 Uhuru Hwy, Mombasa, Kenya',
      deliveryAddress: '101 Serengeti Rd, Arusha, Tanzania',
      expectedDelivery: '2025-07-23', // Updated to July 2025
      scheduledPickup: '2025-07-23', // Updated to July 2025
      type: 'sent'
    },
    {
      id: '#P44556',
      weight: 5.0,
      status: 'Cancelled',
      pickupAddress: '222 Limuru Rd, Eldoret, Kenya',
      deliveryAddress: '333 Nile St, Kigali, Rwanda',
      expectedDelivery: '2025-06-28', // Updated to June 2025
      type: 'sent'
    }
  ];

  receivedParcels: Parcel[] = [
    {
      id: '#P10987',
      weight: 0.7,
      status: 'Delivered',
      pickupAddress: '987 Main St, Addis Ababa, Ethiopia',
      deliveryAddress: '654 Koinange St, Nairobi, Kenya',
      expectedDelivery: '2025-07-18', // Updated to July 2025
      deliveredDate: '2025-07-18', // Updated to July 2025
      type: 'received'
    },
    {
      id: '#P32109',
      weight: 2.1,
      status: 'Delivered',
      pickupAddress: '111 Bond St, London, UK',
      deliveryAddress: '777 Waiyaki Way, Nairobi, Kenya',
      expectedDelivery: '2025-06-12', // Updated to June 2025
      deliveredDate: '2025-06-12', // Updated to June 2025
      type: 'received'
    },
    {
      id: '#P65432',
      weight: 4.0,
      status: 'In Transit',
      pickupAddress: '555 Broadway, New York, USA',
      deliveryAddress: '888 Ngong Rd, Nairobi, Kenya',
      expectedDelivery: '2025-07-26', // Updated to July 2025
      type: 'received'
    }
  ];

  activeTab: 'sent' | 'received' = 'sent';
  totalParcels = 63;
  growthPercentage = 15;

  constructor() {}

  ngOnInit() {
    // Initialize dashboard data
  }

  switchTab(tab: 'sent' | 'received') {
    this.activeTab = tab;
  }

  getRecentParcels(): Parcel[] {
    return this.activeTab === 'sent' ? this.sentParcels : this.receivedParcels;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'In Transit': return 'status-transit';
      case 'Delivered': return 'status-delivered';
      case 'Cancelled': return 'status-cancelled';
      default: return '';
    }
  }

  getActivityIcon(activity: Activity): string {
    return activity.icon;
  }

  getActivityText(activity: Activity): string {
    switch (activity.status) {
      case 'In Transit':
        return `Estimated delivery: ${activity.date}`;
      case 'Delivered':
        return `Delivered on: ${activity.date}`;
      case 'Pending':
        return `Scheduled for pickup: ${activity.date}`;
      case 'Cancelled':
        return `Cancelled on: ${activity.date}`;
      default:
        return activity.date;
    }
  }
}