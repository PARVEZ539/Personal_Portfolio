import { useState } from "react";
import type { TabId } from "../types";

export function useTab(initial: TabId = "skills") {
  const [activeTab, setActiveTab] = useState<TabId>(initial);
  return { activeTab, setActiveTab };
}
