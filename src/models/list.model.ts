export interface List {
  _id: string;
  title: string;
  type: string;
  genre?: string;
  content: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
