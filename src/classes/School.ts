import { LunchType, SchoolMetaType, StaffType } from '../types';

import SchoolType from '../types/SchoolType';
import { Student } from '.';

/**
 * Class for representing a school.
 * @class School
 */
export default class School {
    /**
     * Constructor for the school class.
     * @param {string | null} createdAt CreatedAt.
     * @param {string | null} updatedAt UpdatedAt.
     * @param {string | null} name SchoolName.
     * @param {string | null} status Status.
     * @param {string | null} domains Domains.
     * @param {string | null} cohortTypes CohortTypes.
     * @param {string | null} staticSchedules StaticSchedules.
     * @param {string | null} title Title.
     * @param {string | null} nickname Nickname.
     * @param {string | null} periodNames PeriodNames.
     * @param {string | null} lunch Lunch.
     * @param {string | null} phoneNumber PhoneNumber.
     * @param {string | null} primaryColor PrimaryColor.
     * @param {string | null} darkModeColor DarkModeColor.
     * @param {string | null} studentsCount StudentsCount.
     * @param {string | null} state State.
     * @param {string | null} districtCode DistrictCode.
     * @param {string | null} countyCode CountyCode.
     * @param {string | null} timezone Timezone.
     * @param {string | null} lat Lat.
     * @param {string | null} lng Lng.
     * @param {string | null} notes Notes.
     * @param {string | null} scheduleTags ScheduleTags.
     * @param {string | null} isPrivate IsPrivate.
     * @param {string | null} districtName DistrictName.
     * @param {string | null} districtSchoolCount DistrictSchoolCount.
     * @param {string | null} meta Meta.
     * @param {string | null} staff Staff.
     * @param {string | null} users Users.
     */
    constructor(
        public createdAt: Date,
        public updatedAt: Date,
        public name: string,
        public status: string,
        public domains: string[],
        public cohortTypes: string[],
        public staticSchedules: string[],
        public title: string,
        public nickname: string,
        public periodNames: string[],
        public lunch: LunchType,
        public phoneNumber: string | null,
        public primaryColor: string | null,
        public darkModeColor: string | null,
        public studentsCount: number,
        public state: string,
        public districtCode: string,
        public countyCode: string | null,
        public timezone: string,
        public lat: number,
        public lng: number,
        public notes: string | null,
        public scheduleTags: string[],
        public isPrivate: boolean,
        public districtName: string,
        public districtSchoolCount: number,
        public meta: SchoolMetaType,
        public staff: StaffType[],
        public users: Student[],
    ) {}

    /**
     * Deserialize a school object.
     * @param   {SchoolType} data Shape of the serialized data.
     * @returns {School} The new School instance.
     */
    static deserialize(data: SchoolType): School {
        return new School(
            new Date(data.created_at),
            new Date(data.updated_at),
            data.school_name,
            data.status,
            data.domains,
            data.cohort_types,
            data.static_schedules,
            data.school_title,
            data.nickname,
            data.period_names,
            {
                duration: data.lunch_length,
                waveFrequency: data.lunch_wave_frequency,
                passingDuration: data.lunch_passing_time,
                waves: data.lunch_waves,
                firstWaveNow: data.lunch_first_wave_now,
                firstWaveNowOffset: data.lunch_first_wave_now_offset,
                firstWavePass: data.lunch_first_wave_pass,
                lastWavePass: data.lunch_last_wave_pass,
            },
            data.phone_number,
            data.primary_color,
            data.dark_mode_color,
            data.students_count,
            data.state,
            data.district_code,
            data.county_code,
            data.timezone,
            data.lat,
            data.lng,
            data.notes,
            data.schedule_tags,
            data.private,
            data.district_name,
            data.district_school_count,
            {
                freePeriodCourseId: data.meta.free_period_course_id,
                chatMinimumDepth: data.meta.chat_minimum_depth,
                userCount: data.meta.user_count,
                studentsCount: data.meta.students_count,
                features: {
                    chatTab: data.meta.features.chat_tab,
                    chatUnlocked: data.meta.features.chat_unlocked,
                    chatUnlockedWeb: data.meta.features.chat_unlocked_web,
                    crushCopy: data.meta.features.crush_copy,
                    gradeChats: data.meta.features.grade_chats,
                    localScheduleChange:
                        data.meta.features.local_schedule_change,
                    swapCoursesListAndShareButtons:
                        data.meta.features.swap_courses_list_and_share_buttons,
                    userJoinedClassNotifications:
                        data.meta.features.user_joined_class_notifications,
                },
            },
            data.staff,
            data.users.map((user) => Student.deserialize(user)),
        );
    }

    /**
     * Gets the schedule from the school Id.
     */
    async getSchedule(): Promise<void> {
        return;
    }
}
