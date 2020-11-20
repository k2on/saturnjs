import { PermissionsType, StudentType } from '.';

export default interface UserType extends StudentType {
    readonly school: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly gender: string | null;
    readonly phoneNumber: string | null;
    readonly isPhoneValidated: boolean;
    readonly tags: string[];
    readonly waitlistSchoolId: number | null;
    readonly schoolId: string;
    readonly hashid: string;
    readonly schoolTitle: string;
    readonly permissions: PermissionsType;
}
