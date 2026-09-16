// Gift-voucher tiers for the /cadeaubon page. Some tiers are linked to a
// specific treatment at that price point (see content-nl.md § CadeauBon).

export interface GiftVoucherTier {
  amount: number;
  linkedSessions?: string[];
}

export const GIFT_VOUCHER_TIERS: GiftVoucherTier[] = [
  { amount: 5 },
  { amount: 10 },
  { amount: 20 },
  { amount: 30 },
  { amount: 40 },
  { amount: 50 },
  { amount: 60, linkedSessions: ['Knuffelsessie'] },
  { amount: 70 },
  { amount: 80 },
  { amount: 90, linkedSessions: ['Ontspanningsmassage'] },
  { amount: 125, linkedSessions: ['Lomi Lomi', 'Bellylomi', 'Ademsessie'] },
  { amount: 180, linkedSessions: ['De-Armouring', 'Tantra massage'] },
];
