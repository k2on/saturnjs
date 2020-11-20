import { PermissionsType, ProfilePictureType, UserType } from '../types';

import { Student } from '.';

/**
 * Class to represent a User.
 * @class User
 */
export default class User extends Student {
    /**
     * Constructor for a User.
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
     * @param {string}             school            School identifier.
     * @param {Date}               createdAt         Date object of user's creation.
     * @param {Date}               updatedAt         Date object of user's last modification.
     * @param {string | null}      gender            Gender.
     * @param {string | null}      phoneNumber       Phone number.
     * @param {boolean}            isPhoneValidated  If the phone number is validated.
     * @param {string[]}           tags              Tags.
     * @param {string | null}      waitlistSchoolId  Waitlist School ID.
     * @param {string}             schoolid          User's school's identifier.
     * @param {string}             hashid            HashID.
     * @param {string}             schoolTitle       Name of the user's school.
     * @param {PermissionsType}    permissions       Permissions.
     */
    constructor(
        // Student data
        id: number,
        name: string,
        email: string,
        profilePicture: ProfilePictureType,
        firstName: string,
        lastName: string,
        birthdate: Date,
        grade: number,
        scheduleIsPublic = false,
        isAmbassador = false,
        cohort: string | null = null,
        instagramUsername: string | null = null,
        tiktokUsername: string | null = null,
        venmoUsername: string | null = null,
        vscoUsername: string | null = null,
        snapchatUsername: string | null = null,
        bio: string | null = null,
        url: string | null = null,
        isHidden: boolean,
        // User specific data
        public readonly school: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
        public readonly gender: string | null = null,
        public readonly phoneNumber: string | null = null,
        public readonly isPhoneValidated: boolean = false,
        public readonly tags: string[] = [],
        public readonly waitlistSchoolId: number | null = null,
        public readonly schoolid: string,
        public readonly hashid: string,
        public readonly schoolTitle: string,
        public readonly permissions: PermissionsType = {
            admin: false,
            owner: false,
            waitlist: false,
        },
    ) {
        super(
            id,
            name,
            email,
            profilePicture,
            firstName,
            lastName,
            birthdate,
            grade,
            scheduleIsPublic,
            isAmbassador,
            cohort,
            instagramUsername,
            tiktokUsername,
            venmoUsername,
            vscoUsername,
            snapchatUsername,
            bio,
            url,
            isHidden,
        );
    }

    /**
     * Deserialize a response from the API to a `User` instance.
     * @function deserialize
     * @memberof User
     * @static
     * @param {UserType} data Shape of the data.
     * @returns {User} New `User` instance.
     */
    static deserialize(data: UserType): User {
        return new User(
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
            data.school,
            new Date(data.createdAt),
            new Date(data.updatedAt),
            data.gender,
            data.phoneNumber,
            data.isPhoneValidated,
            data.tags,
            data.waitlistSchoolId,
            data.schoolId,
            data.hashid,
            data.schoolTitle,
            data.permissions,
        );
    }
}
