export default interface SchoolMetaType {
    readonly freePeriodCourseId: number;
    readonly chatMinimumDepth: number;
    readonly userCount: number;
    readonly studentsCount: number;
    readonly features: {
        chatTab: boolean;
        chatUnlocked: boolean;
        chatUnlockedWeb: boolean;
        crushCopy: boolean;
        gradeChats: boolean;
        localScheduleChange: boolean;
        swapCoursesListAndShareButtons: boolean;
        userJoinedClassNotifications: boolean;
    };
}
