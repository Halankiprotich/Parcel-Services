import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface ParcelDetailsData {
  id: string;
  trackingNumber: string;
  status: 'Pending' | 'In Transit' | 'Delivered' | 'Cancelled';
  pickupDate: string;
  deliveryDate: string;
  weight: string;
  dimensions: string;
  price: string;
  driver?: {
    name: string;
    phone: string;
    email: string;
    vehicleNumber: string;
    licenseNumber: string;
  };
  sender: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  receiver: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  orderHistory: Array<{
    status: string;
    date: string;
    time: string;
    icon: string;
  }>;
  activityLog: Array<{
    action: string;
    date: string;
    time: string;
    user: string;
    icon: string;
  }>;
}

@Component({
  selector: 'app-parcel-details',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './parcel-details.html',
  styleUrl: './parcel-details.css'
})
export class ParcelDetails implements OnInit {
  parcelId: string = '';
  parcel: ParcelDetailsData | null = null;
  loading = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parcelId = params['id'];
      this.loadParcelDetails();
    });
  }

  loadParcelDetails() {
    this.loading = true;
    
    // Get the parcel ID from the URL parameter
    const parcelId = this.parcelId.replace('#', ''); // Remove # from parcel ID
    
    // Find the parcel from the manage parcels data
    const parcelsData = [
      { id: '#12345', sender: 'Olivia Bennett', receiver: 'Ethan Carter', status: 'Pending', expectedDelivery: '2024-07-20', driver: 'Unassigned' },
      { id: '#12346', sender: 'Noah Foster', receiver: 'Sophia Green', status: 'In Transit', expectedDelivery: '2024-07-21', driver: 'John Smith' },
      { id: '#12347', sender: 'Lucas Hayes', receiver: 'Isabella Ingram', status: 'Delivered', expectedDelivery: '2024-07-19', driver: 'Mike Johnson' },
      { id: '#12348', sender: 'Emily King', receiver: 'Jacob Lewis', status: 'Pending', expectedDelivery: '2024-07-22', driver: 'Unassigned' },
      { id: '#12349', sender: 'Chloe Morgan', receiver: 'Caleb Nelson', status: 'In Transit', expectedDelivery: '2024-07-23', driver: 'Sarah Wilson' },
      { id: '#12350', sender: 'Ava Parker', receiver: 'Owen Quinn', status: 'Delivered', expectedDelivery: '2024-07-18', driver: 'David Brown' },
      { id: '#12351', sender: 'Ryan Roberts', receiver: 'Mia Scott', status: 'Pending', expectedDelivery: '2024-07-24', driver: 'Unassigned' },
      { id: '#12352', sender: 'Daniel Turner', receiver: 'Harper Upton', status: 'In Transit', expectedDelivery: '2024-07-25', driver: 'Lisa Davis' },
      { id: '#12353', sender: 'Aiden Vance', receiver: 'Abigail Walker', status: 'Delivered', expectedDelivery: '2024-07-17', driver: 'Tom Miller' },
      { id: '#12354', sender: 'Jackson Young', receiver: 'Liam Zane', status: 'Pending', expectedDelivery: '2024-07-26', driver: 'Unassigned' }
    ];
    
    const foundParcel = parcelsData.find(p => p.id === this.parcelId);
    
    if (foundParcel) {
      // Create detailed parcel data based on the found parcel
      const weight = this.getRandomWeight();
      this.parcel = {
        id: foundParcel.id,
        trackingNumber: foundParcel.id.replace('#', ''),
        status: foundParcel.status as 'Pending' | 'In Transit' | 'Delivered' | 'Cancelled',
        pickupDate: this.getPickupDate(foundParcel.expectedDelivery),
        deliveryDate: foundParcel.expectedDelivery,
        weight: weight,
        dimensions: this.getRandomDimensions(),
        price: this.calculatePriceFromWeight(weight),
        driver: foundParcel.driver !== 'Unassigned' ? this.getDriverInfo(foundParcel.driver) : undefined,
        sender: {
          name: foundParcel.sender,
          address: this.getAddress(foundParcel.sender),
          phone: this.getPhone(foundParcel.sender),
          email: this.getEmail(foundParcel.sender)
        },
        receiver: {
          name: foundParcel.receiver,
          address: this.getAddress(foundParcel.receiver),
          phone: this.getPhone(foundParcel.receiver),
          email: this.getEmail(foundParcel.receiver)
        },
        orderHistory: this.generateOrderHistory(foundParcel.status, foundParcel.expectedDelivery),
        activityLog: this.generateActivityLog(foundParcel.status, foundParcel.expectedDelivery)
      };
    } else {
      // Fallback data if parcel not found
      const fallbackWeight = '5 kg';
      this.parcel = {
        id: this.parcelId,
        trackingNumber: this.parcelId.replace('#', ''),
        status: 'Pending',
        pickupDate: 'July 15, 2024',
        deliveryDate: 'July 18, 2024',
        weight: fallbackWeight,
        dimensions: '25x15x8 cm',
        price: this.calculatePriceFromWeight(fallbackWeight),
        sender: {
          name: 'Unknown Sender',
          address: 'Address not available',
          phone: 'Phone not available',
          email: 'email@notavailable.com'
        },
        receiver: {
          name: 'Unknown Receiver',
          address: 'Address not available',
          phone: 'Phone not available',
          email: 'email@notavailable.com'
        },
        orderHistory: [
          {
            status: 'Order Placed',
            date: 'July 15, 2024',
            time: '10:00 AM',
            icon: 'fas fa-circle'
          }
        ],
        activityLog: [
          {
            action: 'Order Created',
            date: 'July 15, 2024',
            time: '10:00 AM',
            user: 'System',
            icon: 'fas fa-circle'
          }
        ]
      };
    }
    
    this.loading = false;
  }

  private getPickupDate(deliveryDate: string): string {
    const delivery = new Date(deliveryDate);
    const pickup = new Date(delivery);
    pickup.setDate(pickup.getDate() - 3);
    return pickup.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  private getRandomWeight(): string {
    const weights = ['2.5 kg', '3.8 kg', '1.2 kg', '4.1 kg', '0.8 kg', '5.2 kg', '1.8 kg', '3.3 kg'];
    return weights[Math.floor(Math.random() * weights.length)];
  }

  private getRandomDimensions(): string {
    const dimensions = ['25x15x8 cm', '30x20x10 cm', '20x12x6 cm', '35x25x15 cm', '15x10x5 cm', '40x30x20 cm'];
    return dimensions[Math.floor(Math.random() * dimensions.length)];
  }

  private getRandomPrice(): string {
    const prices = ['KSH 2,500', 'KSH 3,550', 'KSH 4,275', 'KSH 1,899', 'KSH 5,525', 'KSH 2,999', 'KSH 3,850', 'KSH 4,725'];
    return prices[Math.floor(Math.random() * prices.length)];
  }

  private calculatePriceFromWeight(weight: string): string {
    // Extract numeric weight value from string like "2.5 kg"
    const weightMatch = weight.match(/(\d+\.?\d*)/);
    if (weightMatch) {
      const weightValue = parseFloat(weightMatch[1]);
      const price = weightValue * 100; // 100 KSH per 1kg
      return `KSH ${price.toLocaleString()}`;
    }
    return 'KSH 500'; // Default fallback
  }

  private getAddress(name: string): string {
    const addresses = [
      '123 Main Street, Anytown, USA',
      '456 Oak Avenue, Somewhere, USA',
      '789 Pine Road, Elsewhere, USA',
      '321 Elm Street, Nowhere, USA',
      '654 Maple Drive, Anywhere, USA'
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
  }

  private getPhone(name: string): string {
    return `+1-555-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`;
  }

  private getEmail(name: string): string {
    const firstName = name.split(' ')[0].toLowerCase();
    const lastName = name.split(' ')[1]?.toLowerCase() || 'user';
    return `${firstName}.${lastName}@email.com`;
  }

  private generateOrderHistory(status: string, deliveryDate: string): Array<{status: string, date: string, time: string, icon: string}> {
    const history = [
      {
        status: 'Order Placed',
        date: this.getPickupDate(deliveryDate),
        time: '10:00 AM',
        icon: 'fas fa-circle'
      }
    ];

    if (status !== 'Pending') {
      history.push({
        status: 'Picked Up',
        date: this.getPickupDate(deliveryDate),
        time: '2:00 PM',
        icon: 'fas fa-box'
      });
    }

    if (status === 'In Transit' || status === 'Delivered') {
      history.push({
        status: 'In Transit',
        date: deliveryDate,
        time: '9:00 AM',
        icon: 'fas fa-truck'
      });
    }

    if (status === 'Delivered') {
      history.push({
        status: 'Delivered',
        date: deliveryDate,
        time: '3:00 PM',
        icon: 'fas fa-check-circle'
      });
    }

    return history;
  }

  private getDriverInfo(driverName: string): {name: string, phone: string, email: string, vehicleNumber: string, licenseNumber: string} {
    const driverData = {
      'John Smith': {
        name: 'John Smith',
        phone: '+1-555-123-4567',
        email: 'john.smith@sendit.com',
        vehicleNumber: 'ABC-123',
        licenseNumber: 'DL-789456'
      },
      'Mike Johnson': {
        name: 'Mike Johnson',
        phone: '+1-555-234-5678',
        email: 'mike.johnson@sendit.com',
        vehicleNumber: 'XYZ-456',
        licenseNumber: 'DL-456789'
      },
      'Sarah Wilson': {
        name: 'Sarah Wilson',
        phone: '+1-555-345-6789',
        email: 'sarah.wilson@sendit.com',
        vehicleNumber: 'DEF-789',
        licenseNumber: 'DL-123456'
      },
      'David Brown': {
        name: 'David Brown',
        phone: '+1-555-456-7890',
        email: 'david.brown@sendit.com',
        vehicleNumber: 'GHI-012',
        licenseNumber: 'DL-654321'
      },
      'Lisa Davis': {
        name: 'Lisa Davis',
        phone: '+1-555-567-8901',
        email: 'lisa.davis@sendit.com',
        vehicleNumber: 'JKL-345',
        licenseNumber: 'DL-987654'
      },
      'Tom Miller': {
        name: 'Tom Miller',
        phone: '+1-555-678-9012',
        email: 'tom.miller@sendit.com',
        vehicleNumber: 'MNO-678',
        licenseNumber: 'DL-321654'
      }
    };

    return driverData[driverName as keyof typeof driverData] || {
      name: driverName,
      phone: '+1-555-000-0000',
      email: `${driverName.toLowerCase().replace(' ', '.')}@sendit.com`,
      vehicleNumber: 'UNK-000',
      licenseNumber: 'DL-000000'
    };
  }

  private generateActivityLog(status: string, deliveryDate: string): Array<{action: string, date: string, time: string, user: string, icon: string}> {
    const activities = [
      {
        action: 'Order Created',
        date: this.getPickupDate(deliveryDate),
        time: '10:00 AM',
        user: 'System',
        icon: 'fas fa-circle'
      },
      {
        action: 'Parcel Information Edited',
        date: this.getPickupDate(deliveryDate),
        time: '11:30 AM',
        user: 'Admin',
        icon: 'fas fa-link'
      }
    ];

    if (status !== 'Pending') {
      activities.push({
        action: 'Status Updated',
        date: this.getPickupDate(deliveryDate),
        time: '2:00 PM',
        user: 'Admin',
        icon: 'fas fa-box'
      });
    }

    if (status === 'In Transit' || status === 'Delivered') {
      activities.push({
        action: 'Status Updated',
        date: deliveryDate,
        time: '9:00 AM',
        user: 'Admin',
        icon: 'fas fa-truck'
      });
    }

    if (status === 'Delivered') {
      activities.push({
        action: 'Status Updated',
        date: deliveryDate,
        time: '3:00 PM',
        user: 'Admin',
        icon: 'fas fa-check-circle'
      });
    }

    return activities;
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

  updateStatus() {
    console.log('Update status for parcel:', this.parcelId);
    
  }

  goBack() {
    window.history.back();
  }
} 