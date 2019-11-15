import { useState } from "react";

export default function useUpcState() {
  const [upc, setUpc] = useState("");

  return [upc, setUpc];
}
