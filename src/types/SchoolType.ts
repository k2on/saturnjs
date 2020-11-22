import { StudentType, StaffType } from '.';

export interface SchoolType {
    readonly created_at: string;
    readonly updated_at: string;
    readonly school_name: string;
    readonly status: string;
    readonly domains: string[];
    readonly cohort_types: string[];
    readonly static_schedules: string[];
    readonly school_title: string;
    readonly nickname: string;
    readonly period_names: string[];
    readonly lunch_length: number;
    readonly lunch_wave_frequency: number | null;
    readonly lunch_passing_time: number | null;
    readonly lunch_waves: number;
    readonly lunch_first_wave_now: boolean | null;
    readonly lunch_first_wave_now_offset: number | null;
    readonly lunch_first_wave_pass: number | null;
    readonly lunch_last_wave_pass: number | null;
    readonly phone_number: string | null;
    readonly primary_color: string | null;
    readonly dark_mode_color: string | null;
    readonly students_count: number;
    readonly state: string;
    readonly district_code: string;
    readonly county_code: string | null;
    readonly timezone: string;
    readonly lat: number;
    readonly lng: number;
    readonly notes: string | null;
    readonly schedule_tags: string[];
    readonly private: boolean;
    readonly district_name: string;
    readonly district_school_count: number;
    readonly meta: {
        free_period_course_id: number;
        chat_minimum_depth: number;
        user_count: number;
        students_count: number;
        features: {
            chat_tab: boolean;
            chat_unlocked: boolean;
            chat_unlocked_web: boolean;
            crush_copy: boolean;
            grade_chats: boolean;
            local_schedule_change: boolean;
            swap_courses_list_and_share_buttons: boolean;
            user_joined_class_notifications: boolean;
        };
    };
}

export interface SchoolTypeFull extends SchoolType {
    staff: StaffType[];
    users: StudentType[];
}
