export interface ExamsRequestDTO {
  id?: number;
  name: string;
  value: number;
  valueWithRate?: number;
  isHighligth?: boolean;
  specie?: string;
  groupId?: number;
  deadline: string;
  preparing?: string;
}
