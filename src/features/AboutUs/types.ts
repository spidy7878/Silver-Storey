export interface Stat {
  value: string; // e.g. '60+', '50000'
  label: string;
}

export interface ProcessItem {
  bold: string;
  text: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  items: ProcessItem[];
}

export interface ProcessPhase {
  heading: string;
  steps: ProcessStep[];
}
