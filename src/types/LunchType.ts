export default interface LunchType {
    readonly duration: number;
    readonly waveFrequency: number | null;
    readonly passingDuration: number | null;
    readonly waves: number | null;
    readonly firstWaveNow: boolean | null;
    readonly firstWaveNowOffset: number | null;
    readonly firstWavePass: number | null;
    readonly lastWavePass: number | null;
}
