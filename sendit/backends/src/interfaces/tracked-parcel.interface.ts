export interface TrackedParcelI {
  id: string;
  trackingId: string;
  status: string;
  description: string;
  category: string;
  totalPrice: number;
  receiver: {
    name: string;
    email: string;
  };
  deliveryAddress: string;
  history: {
    status: string;
    notes?: string;
    createdAt: Date;
  }[];
}