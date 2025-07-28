export interface DriverMetricsI {
  totalAssigned: number;
  delivered: number;
  inTransit: number;
  cancelled: number;
  pickedUp: number;
}
