// client/src/NodeFetcher.js
import { useEffect } from "react";

function NodeFetcher() {
  useEffect(() => {
    fetch("http://127.0.0.1:4312")
      .then((res) => res.text())
      .then((data) => console.log("Fetched:", data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return null;
}

export default NodeFetcher;
