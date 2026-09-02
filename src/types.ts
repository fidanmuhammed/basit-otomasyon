export type SystemCategory = 'workflow' | 'omnichannel';

export interface SystemCapability {
  id: string;
  code: string;
  category: SystemCategory;
  title: string;
  headline: string;
  summary: string;
  detailedArchitecture: string[];
  latency: string;
  throughput: string;
  accuracy: string;
  roiImpact: string;
  integrations: string[];
  compliance: string[];
  samplePayload: {
    input: Record<string, any>;
    output: Record<string, any>;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface SimulationWorkflow {
  id: string;
  name: string;
  description: string;
  inputLabel: string;
  defaultInput: string;
  stages: {
    name: string;
    detail: string;
    durationMs: number;
  }[];
  sampleLogs: string[];
  outputData: Record<string, any>;
}

export interface ConsultationSubmission {
  selectedSystems: string[];
  budget: number;
  timeline: string;
  compliance: string[];
  fullName: string;
  workEmail: string;
  companyName: string;
  additionalNotes: string;
}
