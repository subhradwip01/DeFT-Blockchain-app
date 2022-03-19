export default function(address) {
    return `${address?.substr(0,5)}...${address.substr(address.length-4,address.length-1)}`
}