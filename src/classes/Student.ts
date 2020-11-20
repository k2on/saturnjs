import { ProfilePictureType, StudentType } from '../types';

/**
 * Class for representing a Student.
 * @class Student
 */
export default class Student {
    /**
     * Constructor for a student.
     * @param {number}             id                Identifier.
     * @param {string}             name              Full name.
     * @param {string}             email             Email address.
     * @param {ProfilePictureType} profilePicture    Profile picture.
     * @param {string}             firstName         First name.
     * @param {string}             lastName          Last name.
     * @param {Date}               birthdate         Birthday object.
     * @param {number}             grade             Grade.
     * @param {boolean}            scheduleIsPublic  Has a public schedule.
     * @param {boolean}            isAmbassador      Is an ambassador.
     * @param {string | null}      cohort            Cohort group.
     * @param {string | null}      instagramUsername Connected Instagram username.
     * @param {string | null}      tiktokUsername    Connected TikTok username.
     * @param {string | null}      venmoUsername     Connected Venmo username.
     * @param {string | null}      vscoUsername      Connected VSCO username.
     * @param {string | null}      snapchatUsername  Connected Snapchat username.
     * @param {string | null}      bio               Biography.
     * @param {string | null}      url               Student's provided URL.
     * @param {boolean}            isHidden          IDK honestly.
     */
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly email: string,
        public readonly profilePicture: ProfilePictureType,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly birthdate: Date,
        public readonly grade: number,
        public readonly scheduleIsPublic: boolean = false,
        public readonly isAmbassador: boolean = false,
        public readonly cohort: string | null = null,
        public readonly instagramUsername: string | null = null,
        public readonly tiktokUsername: string | null = null,
        public readonly venmoUsername: string | null = null,
        public readonly vscoUsername: string | null = null,
        public readonly snapchatUsername: string | null = null,
        public readonly bio: string | null = null,
        public readonly url: string | null = null,
        public readonly isHidden: boolean,
    ) {}

    /**
     * Deserialize a response from the API to a `Student` instance.
     * @function deserialize
     * @memberof Student
     * @static
     * @param {StudentType} data Shape of the data.
     * @returns {Student} New `Student` instance.
     */
    static deserialize(data: StudentType): Student {
        return new Student(
            data.id,
            data.name,
            data.email,
            data.profilePicture,
            data.firstName,
            data.lastName,
            new Date(data.birthday),
            data.grade,
            data.public,
            data.isAmbassador,
            data.userCohort,
            data.userInstagram,
            data.userTiktok,
            data.userVenmo,
            data.userVsco,
            data.userSnapchat,
            data.bio,
            data.url,
            data.hidden,
        );
    }
}
