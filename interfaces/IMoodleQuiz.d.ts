import NumericBoolean from '../types/NumericBoolean';
import QuestionBehaviours from '../types/QuestionBehaviours';
export default interface IMoodleQuiz {
    id: number;
    coursemodule: number;
    course: number;
    name: string;
    intro: string;
    introformat: number;
    introfiles: unknown[];
    section: number;
    visible: boolean;
    groupmode: number;
    groupingid: number;
    lang: string;
    timeopen: number;
    timeclose: number;
    timelimit: number;
    overduehandling: string;
    graceperiod: number;
    preferredbehaviour: QuestionBehaviours;
    canredoquestions: NumericBoolean;
    attempts: number;
    attemptonlast: number;
    grademethod: number;
    decimalpoints: number;
    questiondecimalpoints: number;
    reviewattempt: number;
    reviewcorrectness: number;
    reviewmarks: number;
    reviewspecificfeedback: number;
    reviewgeneralfeedback: number;
    reviewrightanswer: number;
    reviewoverallfeedback: number;
    questionsperpage: number;
    navmethod: string;
    sumgrades: number;
    grade: number;
    browsersecurity: string;
    delay1: number;
    delay2: number;
    showuserpicture: NumericBoolean;
    showblocks: NumericBoolean;
    completionattemptsexhausted: NumericBoolean;
    completionpass: NumericBoolean;
    allowofflineattempts: NumericBoolean;
    autosaveperiod: number;
    hasfeedback: NumericBoolean;
    hasquestions: NumericBoolean;
}