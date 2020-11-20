import { ProfilePictureType } from '.';

export default interface StudentType {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly profilePicture: ProfilePictureType;
    readonly firstName: string;
    readonly lastName: string;
    readonly birthday: string;
    readonly grade: number;
    readonly public: boolean;
    readonly isAmbassador: boolean;
    readonly userCohort: string | null;
    readonly userInstagram: string | null;
    readonly userTiktok: string | null;
    readonly userVenmo: string | null;
    readonly userVsco: string | null;
    readonly userSnapchat: string | null;
    readonly bio: string | null;
    readonly url: string | null;
    readonly hidden: boolean;
}
