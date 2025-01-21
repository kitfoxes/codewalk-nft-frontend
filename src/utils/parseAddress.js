export function formatAddress(address) {
  if (!address || typeof address !== "string") {
    throw new Error("Invalid address");
  }
  return `${address.slice(0, 3)}...${address.slice(-2)}`;
}
