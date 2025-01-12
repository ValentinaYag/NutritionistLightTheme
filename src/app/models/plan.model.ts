export interface Plan{
    name:string;
    description:string;    
    monthlyPrice:number;
    isMonthly:boolean;
    discountRate:number;
    price?:number;
}