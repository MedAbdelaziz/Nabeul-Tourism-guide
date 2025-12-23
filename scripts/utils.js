export function formatStars( n){
    let n1=n*10;
    let out = n1%10==n1? n1+'0': n1+'';
    return out;
}