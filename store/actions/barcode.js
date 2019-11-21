import { SCANNED } from "../types";

export const setCode = code => ({
  type: SCANNED,
  code
});
