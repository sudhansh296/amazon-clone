export function formatCurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2);// to fixed have some issue with rounding so use math.round to round first then use to fixed 
};

export default formatCurrency;