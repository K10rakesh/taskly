export interface LabelDefinition {
    name: string;
    color: string;
    description: string;
}

export interface LabelsConfig {
    labels: LabelDefinition[];
}

export interface RepositoryLabel {
    name: string;
    color: string;
    description: string | null;
}