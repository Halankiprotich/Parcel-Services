export interface CustomerParcelI {
  id: string;
  trackingId: string;
  description: string;
  status: string;
  totalPrice: number;
  category: string;
  createdAt: Date;
  receiverName?: string;
  deliveryAddress: string;
}
