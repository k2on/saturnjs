import { SchoolType } from '.';

export type SchoolsListType = Omit<SchoolType, 'users' | 'staff'>[];
