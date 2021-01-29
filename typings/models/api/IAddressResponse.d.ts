/**
 * Address details.
 */
export interface IAddressResponse {
    /**
     * The type for the address.
     */
    addressType: number;
    /**
     * The address the details are for.
     */
    address: string;
    /**
     * The balance of the address.
     */
    balance: number;
}
