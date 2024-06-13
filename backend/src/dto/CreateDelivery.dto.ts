export interface CreateDeliveryDto {
    delivery_id: string,
    pickup_location: string,
    dropoff_location: string,
    assigned_driver: string,
    status: string,
    created_at: Date,
    updated_at: Date,
}