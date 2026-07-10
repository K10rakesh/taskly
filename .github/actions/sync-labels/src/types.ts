export interface LabelDefinition {
    name: string;
    color: string;
    description: string;
}

export interface LabelsConfig {
    labels: LabelDefinition[];
}