import { TransactionType } from "@prisma/client";

export type TransactionPercetagePerType = {
  [key in TransactionType]: number;
};
